<?php

namespace App\Http\Controllers\CourseController;

use App\Http\Requests\Course\CreateCourseRequest;
use App\Http\Requests\Course\DeleteCourseRequest;
use App\Http\Requests\Course\SubscribeCourseRequest;
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

        $course = Course::query()->with('contents')->where('id', $id)->first();

        return $course;
    }

    public function searchCourse(Request $request)
    {
        $search = $request->get('search');
        $my = (bool)$request->get('my');

        $course = Course::query()->with('owner')->orderBy('courses.id','desc');

        if ($my){
            $course->join('course_user', 'courses.id','=','course_user.course_id')
                ->where('course_user.user_id','=',Auth::user()->id);
        }

        if (isset($search)) {

            $course->where(function ($q) use ($search) {
                $q->where('title', 'LIKE', '%' . $search . '%')
                    ->orWhere('description', 'LIKE', '%' . $search . '%');
            });
        }

//        dd($course->dd());

        return $course->get();
    }

    public function create(CreateCourseRequest $request)
    {

        $course = new Course();

        $course->title = $request->getTitle();
        $course->user_id = Auth::id();
        $course->description = $request->getDescription();

        $course->save();

        return $course;
    }

    public function update(UpdateCourseRequest $request)
    {
        $course = Course::findOrFail($request->getId());

        $course->title = $request->getTitle();
        $course->description = $request->getDescription();

        $course->save();

        return $course;
    }

    public function delete(DeleteCourseRequest $request)
    {
        return Course::query()->where('id', '=', $request->getId())->delete();
    }

    public function subscribeCourse(SubscribeCourseRequest $request)
    {
        if($request->getSubscribe()){
            return Auth::user()->courses()->detach(Course::find($request->getId()));
        }else{
            return Auth::user()->courses()->attach(Course::find($request->getId()));
        }
    }
}
