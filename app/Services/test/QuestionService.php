<?php

namespace App\Services\test;

use App\Http\Dtos\QuestionDTO;
use App\Http\Requests\Question\CreateQuestionRequest;
use App\Http\Requests\Question\UpdateQuestionRequest;
use App\Http\Requests\Test\DeleteTestRequest;
use App\Models\Question;
use App\Models\Test;
use App\Repositories\test\QuestionRepository;

class QuestionService
{
    public function __construct(private VariantService $variantService, private QuestionRepository $questionRepository)
    {
    }

    public function create(CreateQuestionRequest $request)
    {
        $question = $this->questionRepository->create($request->getTestId(), $request->getTitle());
        $this->variantService->create($request->getVariants(), $question->id);

        return $question;
    }

    public function createFromAi(int $testId, QuestionDTO $questionDTO)
    {
        $question = $this->questionRepository->create($testId, $questionDTO->question);

        $this->variantService->createFromAi($questionDTO->options, $question->id);

        return $question;
    }

    public function update(UpdateQuestionRequest $request)
    {
        $question = $this->questionRepository->update($request);
        $this->variantService->update($request->getVariants());

        return $question;
    }

    public function delete(DeleteTestRequest $request)
    {
        return $this->questionRepository->delete($request->getId());
    }

    public function getByTestId(Test $test)
    {
        return $this->questionRepository->getByTestId($test);
    }
}
