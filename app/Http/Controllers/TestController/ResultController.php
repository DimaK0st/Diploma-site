<?php

namespace App\Http\Controllers\TestController;

use App\Http\Requests\Result\CreateResultRequest;
use App\Models\Result;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;

class ResultController extends BaseController
{
    public function create(CreateResultRequest $request)
    {
        $result = new Result();
        $result->test_id = $request->getTestId();
        $result->user_id = Auth::user()->id;
        $result->result = $request->getResult();

        $result->save();
        return $result;
    }
    public function getByTestId(int $id)
    {
        $result = Result::query()->with('user')->where('test_id', $id);

        return $result;
    }


}
