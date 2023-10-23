<?php

namespace App\Services\test;

use App\Http\Dtos\CreateTestDTO;
use App\Http\Dtos\GeneratedAiQuestionsDTO;
use App\Http\Requests\Test\CreateTestRequest;
use App\Http\Requests\Test\DeleteTestRequest;
use App\Http\Requests\Test\UpdateTestRequest;
use App\Jobs\GetDataFromAi;
use App\Models\Test;
use App\Repositories\test\QuestionRepository;
use App\Repositories\test\TestRepository;

class TestService
{
    public function __construct(
        private TestRepository  $testRepository,
        private QuestionService $questionService,
    )
    {
    }

    public function create(CreateTestRequest $request)
    {
        return $this->testRepository->create($request->getTitle(), $request->getDescription(), $request->getCourseId(), $request->getCount());
    }

    public function generateWithAi(CreateTestRequest $request)
    {
        $createTestDto = CreateTestDTO::fromRequest($request);

        GetDataFromAi::dispatch($createTestDto);
        return true;
    }

    public function createFromAi(CreateTestDTO $createTestDTO, GeneratedAiQuestionsDTO $aiQuestionsDTO)
    {
        $test = $this->testRepository->create($createTestDTO->title, $createTestDTO->description, $createTestDTO->courseId, $createTestDTO->count);

        foreach ($aiQuestionsDTO->questions as $question) {
            $this->questionService->createFromAi($test->id, $question);
        }

        return $test;

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
