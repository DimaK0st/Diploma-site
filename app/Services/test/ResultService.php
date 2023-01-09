<?php

namespace App\Services\test;

use App\Http\Requests\Result\CreateResultRequest;
use App\Repositories\test\ResultRepository;

class ResultService
{
    public function __construct(private ResultRepository $resultRepository)
    {
    }

    public function create(CreateResultRequest $request)
    {
        return $this->resultRepository->create($request);
    }

    public function getByTestId(int $id)
    {
        return $this->resultRepository->getByTestId($id);
    }
}
