<?php

namespace App\Http\Controllers\TestController;

use App\Http\Requests\Result\CreateResultRequest;
use App\Models\Result;
use App\Services\test\ResultService;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;

class ResultController extends BaseController
{
    public function __construct(private ResultService $resultService)
    {
    }

    public function create(CreateResultRequest $request)
    {
        return $this->resultService->create($request);
    }

    public function getByTestId(int $id)
    {
        return $this->resultService->getByTestId($id);
    }
}
