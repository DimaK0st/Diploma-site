<?php

namespace App\Services\test;

use App\Http\Requests\Test\CreateTestRequest;
use App\Http\Requests\Test\DeleteTestRequest;
use App\Http\Requests\Test\UpdateTestRequest;
use App\Repositories\test\TestRepository;

class TestService
{
    public function __construct(private TestRepository $testRepository)
    {
    }

    public function create(CreateTestRequest $request)
    {
        return $this->testRepository->create($request);
    }

    public function update(UpdateTestRequest $request)
    {
        return $this->testRepository->update($request);
    }

    public function delete(DeleteTestRequest $request)
    {
        return $this->testRepository->delete($request);
    }

    public function results($id)
    {
        return $this->testRepository->results($id);
    }

    public function index($id)
    {
        return $this->testRepository->index($id);
    }
}
