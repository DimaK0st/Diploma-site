<?php

namespace App\Http\Controllers\TestController;

use App\Http\Requests\Test\CreateTestRequest;
use App\Http\Requests\Test\DeleteTestRequest;
use App\Http\Requests\Test\UpdateTestRequest;
use App\Models\Test;
use Illuminate\Routing\Controller as BaseController;

class TestController extends BaseController
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
}
