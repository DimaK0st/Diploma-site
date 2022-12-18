<?php

namespace App\Http\Controllers\CourseController;

use App\Http\Requests\CourseContent\CreateCourseContentRequest;
use App\Http\Requests\CourseContent\DeleteCourseContentRequest;
use App\Http\Requests\CourseContent\UpdateCourseContenRequest;
use App\Models\CourseContent;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Request;

class CourseContentController extends BaseController
{

    public function __construct()
    {
    }

    public function index(Request $request, $id)
    {

        $courseContent = CourseContent::query()->where('id', $id)->get();


        return $courseContent;
    }

    public function create(CreateCourseContentRequest $request)
    {
        $courseContent = new CourseContent();

        $courseContent->title = $request->getTitle();
        $courseContent->course_id = $request->getCourseId();
        $courseContent->description = $request->getDescription();
        $courseContent->url = $request->getUrl()?:'';

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
        return CourseContent::query()->where('id', '=', $request->getId())->delete();
    }

}
