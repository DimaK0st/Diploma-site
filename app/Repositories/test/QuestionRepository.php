<?php

namespace App\Repositories\test;

use App\Http\Dtos\GeneratedAiQuestionsDTO;
use App\Http\Dtos\QuestionDTO;
use App\Http\Requests\Question\CreateQuestionRequest;
use App\Http\Requests\Question\UpdateQuestionRequest;
use App\Http\Requests\Test\DeleteTestRequest;
use App\Models\Question;
use App\Models\Test;

class QuestionRepository
{
    public function create(int $testId, string $title)
    {
        $question = new Question();
        $question->test_id = $testId;
        $question->title = $title;
        $question->save();

        return $question;
    }

    public function createFromAi(QuestionDTO $aiQuestionsDTO)
    {
        $question = new Question();
        $question->test_id = $aiQuestionsDTO->testId;
        $question->title = $aiQuestionsDTO->title;
        $question->save();

        return $question;
    }

    public function update(UpdateQuestionRequest $request)
    {
        $question = Question::findOrFail($request->getId());
        $question->title = $request->getTitle();
        $question->test_id = $request->getTestId();
        $question->save();

        return $question;
    }

    public function delete(int $id)
    {
        return Question::query()->where('id', '=', $id)->delete();
    }

    public function getByTestId(Test $test)
    {
        return Question::query()->with('variants')
            ->where('test_id', '=', $test->id)->inRandomOrder()->limit($test->count)->get();
    }
}
