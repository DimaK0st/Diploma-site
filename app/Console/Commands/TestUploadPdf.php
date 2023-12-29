<?php

namespace App\Console\Commands;

use App\Http\Controllers\PaperlessApi;
use Barryvdh\DomPDF\Facade\Pdf;
use GuzzleHttp\Client;
use http\Client\Request;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Http;
use phpseclib3\Crypt\RSA;
use phpseclib3\File\ASN1;
use phpseclib3\File\X509;

class TestUploadPdf extends Command
{
    protected $pass = '';
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:name';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $api = new PaperlessApi();
        $api->getAccessToken();
        $api->getAccessToken();
        $api->getSignDocument('12932268', 'KFOQJmMh6C6TEyNA6av9fyeATqW8kwbMhCYnTzaR2ho', 'Test12.pdf');



        return Command::SUCCESS;
    }
}
