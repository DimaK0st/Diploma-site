<?php

namespace App\Repositories;

use App\Http\Requests\CourseContent\CreateCourseContentRequest;
use App\Http\Requests\CourseContent\DeleteCourseContentRequest;
use App\Http\Requests\CourseContent\UpdateCourseContenRequest;
use App\Models\CourseContent;
use Illuminate\Support\Facades\Request;

class CourseContentRepository
{
    public function index(Request $request, $id)
    {
        return CourseContent::query()->where('id', $id)->get();
    }

    public function create(CreateCourseContentRequest $request)
    {
        $courseContent = new CourseContent();

        $courseContent->title = $request->getTitle();
        $courseContent->course_id = $request->getCourseId();
        $courseContent->description = $request->getDescription();
        $courseContent->url = $request->getUrl() ?: '';

        $courseContent->save();

        return $courseContent;
    }

    public function update(UpdateCourseContenRequest $request)
    {
        $courseContent = CourseContent::findOrFail($request->getId());

        $courseContent->title = $request->getTitle();
        $courseContent->course_id = $request->getCourseId();
        $courseContent->description = $request->getDescription();
        $courseContent->url = $request->getUrl();

        $courseContent->save();

        return $courseContent;
    }

    public function delete(DeleteCourseContentRequest $request)
    {
        return CourseContent::query()
            ->where('id', '=', $request->getId())
            ->delete();
    }
}
