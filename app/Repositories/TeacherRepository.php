<?php

namespace App\Repositories;

use App\Http\Requests\Teacher\CreateTeacherRequest;
use App\Http\Requests\Teacher\DeleteTeacherRequest;
use App\Http\Requests\Teacher\UpdateTeacherRequest;
use App\Models\Teacher;

class TeacherRepository
{
    public function create(CreateTeacherRequest $request, Teacher $teacher)
    {
        $teacher->surname = $request->getSurname();
        $teacher->name = $request->getName();
        $teacher->patronymic = $request->getPatronymic();
        $teacher->email = $request->getEmail();
        $teacher->save();

        return $teacher;
    }

    public function update(UpdateTeacherRequest $request)
    {
        $teacher = Teacher::findOrFail($request->getId());

        $teacher->surname = $request->getSurname();
        $teacher->name = $request->getName();
        $teacher->patronymic = $request->getPatronymic();
        $teacher->email = $request->getEmail();
        $teacher->save();

        return $teacher;
    }

    public function delete(DeleteTeacherRequest $request)
    {
        $teacher = Teacher::findOrFail($request->getId());
        $teacher->delete();
    }
}
