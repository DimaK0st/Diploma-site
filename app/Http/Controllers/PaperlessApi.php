<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PaperlessApi extends Controller
{
    private static string $clientId;
    private static string $secret;
    private static string $accessCode = '';
    private static string $accessToken = '';

    public function __construct()
    {
        self::$clientId = '';
        self::$secret = '';
    }

    // Show all variables
    public function __toString(): string
    {
        return self::$clientId . ' ' . self::$secret . ' ' . self::$accessCode . ' ' . self::$accessToken;
    }

    public function getAccessCode()
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://paperless.com.ua/PplsService/oauth/authorize',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => 'response_type=code&agentCheck=true&client_id='. self::$clientId,
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/x-www-form-urlencoded',
                'Accept: application/json'
            ),
        ));

        $response = json_decode(curl_exec($curl));

        curl_close($curl);

        if (isset($response->state) && $response->state == 'ok') {
            self::$accessCode = $response->code;
        }

        return self::$accessCode;
    }

    public function getAccessToken()
    {
        $this->getAccessCode();

        $concatenated_string = self::$clientId . self::$secret . self::$accessCode;
        $clientSecret = hash("sha512", $concatenated_string);

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://paperless.com.ua/PplsService/oauth/token',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => "grant_type=authorization_code&client_id=".self::$clientId."&client_secret=$clientSecret&code=".self::$accessCode,
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/x-www-form-urlencoded',
                'Accept: application/json'
            ),
        ));

        $response = json_decode(curl_exec($curl));

        if (isset($response->access_token)) {
            self::$accessToken = $response->access_token;
        }

        curl_close($curl);
        return $response;
    }

    public function checkSession()
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://paperless.com.ua/api2/checked/login',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'accept: application/json',
                'Content-Type: text/plain; charset=utf-8',
                'Cookie: sessionId="Bearer ' . self::$accessToken . '1, Id ' . self::$clientId . '"',
            ),
        ));

        $response = json_decode(curl_exec($curl));
        curl_close($curl);

        if (!isset($response->error)) {
            return true;
        }

        if ($this->getAccessToken()){
            return true;
        }

        return false;
    }


    public function uploadFile($pathToFile, $filename)
    {
        $boundary = uniqid();
        $file_contents = file_get_contents($pathToFile);
        $file_contents_base64 = base64_encode($file_contents);

        $data = "--$boundary\r\n";
        $data .= "Content-Disposition: form-data; name=\"file\"; filename=\"$filename\"\r\n";
        $data .= "Content-Type: application/octet-stream\r\n\r\n";
        $data .= "$file_contents_base64\r\n";
        $data .= "--$boundary--\r\n";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://paperless.com.ua/api2/checked/upload');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Accept: application/json',
            'Content-type: multipart/form-data; boundary=' . $boundary . '; charset=UTF-8',
            'Cookie: sessionId="Bearer ' . self::$accessToken . ', Id ' . self::$clientId . '"',
        ));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = json_decode(curl_exec($ch));
        curl_close($ch);

        if (isset($response->state) && $response->state == 'ok') {
            return $response->resourceDTO[0];
        }

        return [];
    }

    public function checkOnSign($docId){
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://paperless.com.ua/api2/checked/resource/'.$docId,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'Cookie: sessionId="Bearer ' . self::$accessToken . ', Id ' . self::$clientId . '"',
                'Accept: application/json'
            ),
        ));

        $response = json_decode(curl_exec($curl));
        curl_close($curl);

        return (isset($response->signed) && $response->signed == true);
    }

    public function getSignDocument($id, $hash, $pathToResultFile)
    {
        $getUrl = "https://paperless.com.ua/api2/checked/resource/withsign/$id/$hash";
        $headers = [
            'Accept' => 'application/json',
            'Cookie' => 'sessionId="Bearer ' . self::$accessToken . ', Id ' . self::$clientId . '"',
        ];
        $result = Http::withHeaders($headers)->get($getUrl)->body();
        file_put_contents($pathToResultFile, $result);
    }


    public function signDocument($id, $hash, $pathToResultFile)
    {
        $getUrl = "https://paperless.com.ua/api2/checked/resource/withsign/$id/$hash";
        $headers = [
            'Accept' => 'application/json',
            'Cookie' => 'sessionId="Bearer ' . self::$accessToken . ', Id ' . self::$clientId . '"',
        ];
        $result = Http::withHeaders($headers)->get($getUrl)->body();
        file_put_contents($pathToResultFile, $result);
    }

}
