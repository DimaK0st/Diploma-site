<?php

namespace App\Http\Controllers\TestController;

use App\Http\Requests\Question\CreateQuestionRequest;
use App\Http\Requests\Question\UpdateQuestionRequest;
use App\Http\Requests\Test\DeleteTestRequest;
use App\Models\Test;
use App\Services\test\QuestionService;
use Illuminate\Routing\Controller as BaseController;

class QuestionController extends BaseController
{

    public function __construct(private QuestionService $questionService)
    {
    }

    public function create(CreateQuestionRequest $request)
    {
        return $this->questionService->create($request);
    }

    public function update(UpdateQuestionRequest $request)
    {
        return $this->questionService->update($request);
    }

    public function delete(DeleteTestRequest $request)
    {
        return $this->questionService->delete($request);
    }

    public function getByTestId(Test $test)
    {
        return $this->questionService->getByTestId($test);
    }
}
