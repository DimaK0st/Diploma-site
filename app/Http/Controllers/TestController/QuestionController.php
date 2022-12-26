<?php

namespace App\Http\Controllers\TestController;

use App\Http\Requests\Question\CreateQuestionRequest;
use App\Http\Requests\Question\UpdateQuestionRequest;
use App\Http\Requests\Test\DeleteTestRequest;
use App\Models\Question;
use App\Models\Variant;
use Illuminate\Routing\Controller as BaseController;

class QuestionController extends BaseController
{
    public function create(CreateQuestionRequest $request)
    {
        $question = new Question();
        $question->title = $request->getTitle();
        $question->test_id = $request->getTestId();

        $question->save();

        foreach ($request->getVariants() as $variant) {
            $variantModel = new Variant();
            $variantModel->question_id = $question->id;
            $variantModel->text = $variant['text'];
            $variantModel->correct = $variant['correct'];

            $variantModel->save();
        }

        return $question;
    }

    public function update(UpdateQuestionRequest $request)
    {
        $question = Question::findOrFail($request->getId());
        $question->title = $request->getTitle();
        $question->test_id = $request->getTestId();
        $question->save();

        foreach ($request->getVariants() as $variant) {
            $variantModel = Variant::query()
                ->where('id', '=', $variant['id']);

            $variantModel->text = $variant['text'];
            $variantModel->correct = $variant['correct'];

            $variant->save();
        }

        return $question;
    }

    public function delete(DeleteTestRequest $request)
    {
        return Question::query()->where('id', '=', $request->getId())->delete();
    }
}
