<?php

namespace App\Http\Controllers\CourseController;

use App\Http\Requests\Course\CreateCourseRequest;
use App\Http\Requests\Course\DeleteCourseRequest;
use App\Http\Requests\Course\UpdateCourseRequest;
use App\Models\Course;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseController extends BaseController
{

    public function __construct()
    {
    }

    public function index(Request $request, $id)
    {

        $course = Course::query()->with('content')->where('id', $id)->get();


        return $course;
    }

    public function searchCourse(Request $request)
    {
        dd(Auth::user());
        $search = $request->get('search');

        $course = Course::query();

        if (isset($search)) {

            $course->where(function ($q) use ($search) {
                $q->where('title', 'LIKE', '%' . $search . '%')
                    ->orWhere('description', 'LIKE', '%' . $search . '%');
            });
        }

        return $course->get();
    }

    public function myCourse(Request $request)
    {
        $search = $request->get('search');

        $course = Course::query();

        if (isset($search)) {

            $course->where(function ($q) use ($search) {
                $q->where('title', 'LIKE', '%' . $search . '%')
                    ->orWhere('description', 'LIKE', '%' . $search . '%');
            });
        }

        return $course->get();
    }

    public function create(CreateCourseRequest $request)
    {

        $course = new Course();

        $course->title = $request->getTitle();
        $course->user_id = $request->getUserId();
        $course->description = $request->getDescription();

        $course->save();

        return $course;
    }

    public function update(UpdateCourseRequest $request)
    {
        $course = Course::findOrFail($request->getId());

        $course->title = $request->getTitle();
        $course->user_id = $request->getUserId();
        $course->description = $request->getDescription();

        $course->save();

        return $course;
    }

    public function delete(DeleteCourseRequest $request)
    {
        return Course::query()->where('id', '=', $request->getId())->delete();
    }


}
