<?php

namespace App\Http\Controllers\CourseController;

use App\Http\Requests\CourseContent\CreateCourseContentRequest;
use App\Http\Requests\CourseContent\DeleteCourseContentRequest;
use App\Http\Requests\CourseContent\UpdateCourseContenRequest;
use App\Models\CourseContent;
use App\Repositories\CourseContentRepository;
use App\Services\CourseContentService;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Request;

class CourseContentController extends BaseController
{
    public function __construct(private CourseContentService $courseContentService)
    {
    }

    public function index(Request $request, $id)
    {
        return $this->courseContentService->index($request, $id);
    }

    public function create(CreateCourseContentRequest $request)
    {
        return $this->courseContentService->create($request);
    }

    public function update(UpdateCourseContenRequest $request)
    {
        return $this->courseContentService->update($request);
    }

    public function delete(DeleteCourseContentRequest $request)
    {
        return $this->courseContentService->delete($request);
    }
}
