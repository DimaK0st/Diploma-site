<?php

namespace App\Services;

use App\Http\Requests\CourseContent\CreateCourseContentRequest;
use App\Http\Requests\CourseContent\DeleteCourseContentRequest;
use App\Http\Requests\CourseContent\UpdateCourseContenRequest;
use App\Repositories\CourseContentRepository;
use Illuminate\Support\Facades\Request;

class CourseContentService
{
    public function __construct(private CourseContentRepository $courseContentRepository)
    {
    }

    public function index(Request $request, $id)
    {
        return $this->courseContentRepository->index($request, $id);
    }

    public function create(CreateCourseContentRequest $request)
    {
        return $this->courseContentRepository->create($request);
    }

    public function update(UpdateCourseContenRequest $request)
    {
        return $this->courseContentRepository->update($request);
    }

    public function delete(DeleteCourseContentRequest $request)
    {
        return $this->courseContentRepository->delete($request);
    }
}
