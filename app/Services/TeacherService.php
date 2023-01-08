<?php

namespace App\Services;

use App\Http\Requests\Teacher\CreateTeacherRequest;
use App\Http\Requests\Teacher\DeleteTeacherRequest;
use App\Http\Requests\Teacher\UpdateTeacherRequest;
use App\Repositories\TeacherRepository;

class TeacherService
{
    public function __construct(private TeacherRepository $teacherRepository)
    {
    }

    public function create(CreateTeacherRequest $request)
    {
        return $this->teacherRepository->create($request);
    }

    public function update(UpdateTeacherRequest $request)
    {
        return $this->teacherRepository->update($request);
    }

    public function delete(DeleteTeacherRequest $request)
    {
        return $this->teacherRepository->delete($request);
    }
}
