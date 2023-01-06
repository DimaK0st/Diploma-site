<?php

namespace App\Repositories\test;

use App\Http\Requests\Question\CreateQuestionRequest;
use App\Http\Requests\Question\UpdateQuestionRequest;
use App\Http\Requests\Test\DeleteTestRequest;
use App\Models\Question;
use App\Models\Test;

class QuestionRepository
{
    public function create(CreateQuestionRequest $request)
    {
        $question = new Question();
        $question->title = $request->getTitle();
        $question->test_id = $request->getTestId();
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

    public function delete(DeleteTestRequest $request)
    {
        return Question::query()->where('id', '=', $request->getId())->delete();
    }

    public function getByTestId(Test $test)
    {
        return Question::query()->with('variants')
            ->where('test_id', '=', $test->id)->inRandomOrder()->limit($test->count)->get();
    }
}
