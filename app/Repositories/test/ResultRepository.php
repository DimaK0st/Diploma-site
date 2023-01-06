<?php

namespace App\Repositories\test;

use App\Http\Requests\Result\CreateResultRequest;
use App\Models\Result;
use Illuminate\Support\Facades\Auth;

class ResultRepository
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
        return Result::query()->with('user')->where('test_id', $id);
    }
}
