<?php

namespace App\Http\Controllers\CourseController;

use App\Http\Requests\Course\CreateCourseRequest;
use App\Http\Requests\Course\DeleteCourseRequest;
use App\Http\Requests\Course\SubscribeCourseRequest;
use App\Http\Requests\Course\UpdateCourseRequest;
use App\Services\CourseService;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class CourseController extends BaseController
{
    public function __construct(private CourseService $courseService)
    {
    }

    public function index(Request $request, $id)
    {
        return $this->courseService->index($request, $id);
    }

    public function searchCourse(Request $request)
    {
        return $this->courseService->searchCourse($request);
    }

    public function create(CreateCourseRequest $request)
    {
        return $this->courseService->create($request);
    }

    public function update(UpdateCourseRequest $request)
    {
        return $this->courseService->update($request);
    }

    public function delete(DeleteCourseRequest $request)
    {
        return $this->courseService->delete($request);
    }

    public function subscribeCourse(SubscribeCourseRequest $request)
    {
        return $this->courseService->subscribeCourse($request);
    }
}
