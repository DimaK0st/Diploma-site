<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Requests\Teacher\CreateTeacherRequest;
use App\Http\Requests\Teacher\DeleteTeacherRequest;
use App\Http\Requests\Teacher\UpdateTeacherRequest;
use App\Services\TeacherService;
use Illuminate\Routing\Controller as BaseController;

class TeacherController extends BaseController
{
    public function __construct(private TeacherService $teacherService)
    {
    }

    public function create(CreateTeacherRequest $request)
    {
        return $this->teacherService->create($request);
    }

    public function update(UpdateTeacherRequest $request)
    {
        return $this->teacherService->update($request);
    }

    public function delete(DeleteTeacherRequest $request)
    {
        return $this->teacherService->delete($request);
    }
}
