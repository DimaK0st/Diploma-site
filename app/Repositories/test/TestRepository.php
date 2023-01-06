<?php

namespace App\Repositories\test;

use App\Http\Requests\Test\CreateTestRequest;
use App\Http\Requests\Test\DeleteTestRequest;
use App\Http\Requests\Test\UpdateTestRequest;
use App\Models\Test;

class TestRepository
{
    public function create(CreateTestRequest $request)
    {
        $test = new Test();

        $test->title = $request->getTitle();
        $test->description = $request->getDescription();
        $test->course_id = $request->getCourseId();
        $test->count = $request->getCount();

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
