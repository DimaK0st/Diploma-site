<?php

namespace App\Repositories\test;

use App\Http\Dtos\CreateTestDTO;
use App\Http\Dtos\GeneratedAiQuestionsDTO;
use App\Http\Requests\Test\CreateTestRequest;
use App\Http\Requests\Test\DeleteTestRequest;
use App\Http\Requests\Test\UpdateTestRequest;
use App\Models\Test;

class TestRepository
{
    public function create(string $title, string $description, int $courseId, int $count)
    {
        $test = new Test();

        $test->title = $title;
        $test->description = $description;
        $test->course_id = $courseId;
        $test->count = $count;

        $test->save();

        return $test;
    }

    public function update(UpdateTestRequest $request)
    {
        $test = Test::findOrFail($request->getId());

        $test->title = $request->getTitle();
        $test->description = $request->getDescription();
        $test->count = $request->getCount();

        $test->save();

        return $test;
    }

    public function delete(DeleteTestRequest $request)
    {
        return Test::query()->where('id', '=', $request->getId())->delete();
    }

    public function results($id)
    {
        return Test::query()->with(['results'])->where('id', '=', $id)->first()->toArray();
    }

    public function index($id)
    {
        return Test::query()->with('questions')->where('id', $id)->first();
    }
}
