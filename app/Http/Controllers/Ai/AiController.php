<?php

namespace App\Http\Controllers\Ai;

use App\Http\Controllers\Controller;
use App\Jobs\GetDataFromAi;

class AiController extends Controller
{
    public function postRequest()
    {
        GetDataFromAi::dispatch('test', 'test', 1);
    }

}
