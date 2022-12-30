<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Requests\Teacher\CreateTeacherRequest;
use App\Http\Requests\Teacher\DeleteTeacherRequest;
use App\Http\Requests\Teacher\UpdateTeacherRequest;
use App\Models\Teacher;
use Illuminate\Routing\Controller as BaseController;

class TeacherController extends BaseController
{

    public function create(CreateTeacherRequest $request)
    {
        $teacher = new Teacher();

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
        return Teacher::query()->where('id', '=', $request->getId())->delete();
    }



}
