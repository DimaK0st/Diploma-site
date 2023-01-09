<?php

namespace App\Services;

use App\Http\Requests\Course\CreateCourseRequest;
use App\Http\Requests\Course\DeleteCourseRequest;
use App\Http\Requests\Course\SubscribeCourseRequest;
use App\Http\Requests\Course\UpdateCourseRequest;
use App\Repositories\CourseRepository;
use Illuminate\Http\Request;

class CourseService
{
    public function __construct(private CourseRepository $courseRepository)
    {
    }

    public function index(Request $request, $id)
    {
        return $this->courseRepository->index($request, $id);
    }

    public function searchCourse(Request $request)
    {
        return $this->courseRepository->searchCourse($request);
    }

    public function create(CreateCourseRequest $request)
    {
        return $this->courseRepository->create($request);
    }

    public function update(UpdateCourseRequest $request)
    {
        return $this->courseRepository->update($request);
    }

    public function delete(DeleteCourseRequest $request)
    {
        return $this->courseRepository->delete($request);
    }

    public function subscribeCourse(SubscribeCourseRequest $request)
    {
        return $this->courseRepository->subscribeCourse($request);
    }
}
