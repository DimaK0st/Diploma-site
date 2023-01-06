<?php

namespace App\Http\Controllers\TestController;

use App\Http\Requests\Test\CreateTestRequest;
use App\Http\Requests\Test\DeleteTestRequest;
use App\Http\Requests\Test\UpdateTestRequest;
use App\Services\test\TestService;
use Illuminate\Routing\Controller as BaseController;

class TestController extends BaseController
{
    public function __construct(private TestService $testService)
    {
    }

    public function create(CreateTestRequest $request)
    {
        return $this->testService->create($request);
    }

    public function update(UpdateTestRequest $request)
    {
        return $this->testService->update($request);
    }

    public function delete(DeleteTestRequest $request)
    {
        return $this->testService->delete($request);
    }

    public function results($id)
    {
        return $this->testService->results($id);
    }

    public function index($id)
    {
        return $this->testService->index($id);
    }
}
