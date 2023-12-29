<?php

use App\Http\Controllers\Ai\AiController;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/postRequest', [AiController::class, 'postRequest']);



Route::get('test', function () {
    return view('test');
});

Route::post('test2', function (Request $request) {
    $file = $request->file('file');
    $path = $file->path();
    list($key,$cert)  = \PPOLib\KeyStore::loadjks(file_get_contents(storage_path('app/key.jks')),$request['password']) ;
    $signeddata= \PPOLib\PPO::sign(file_get_contents($path),$key,$cert);

//    $content = file_get_contents($file);
//
//    $base64 = base64_encode($signeddata);
//
//    $xml = new SimpleXMLElement('<xml/>');
//
//    $xml->addChild('file', "$base64");
//
//
//    $answer = \PPOLib\PPO::send($xml->asXML(),'doc') ;
//dd($answer);
//    $data = \PPOLib\PPO::decrypt($answer);
//    file_put_contents(Storage::disk('local')->path('R_signed1_data.pdf'), $data);
    file_put_contents(Storage::disk('local')->path('R_signed1.pdf'), $signeddata);

    $headers = array(
        'Content-Type: application/pdf',
    );
    return response()->download(Storage::disk('local')->path('R_signed1.pdf'), 'R_signed1.pdf', $headers );
})->name('test2');



//Auth::routes();
//
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//
//Auth::routes();
//
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::view('{path}', 'welcome')->where('path', '([A-z\d\-\/_.]+)?');
