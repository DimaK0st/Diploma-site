<?php

namespace App\Repositories;

use App\Http\Requests\Subject\CreateSubjectRequest;
use App\Http\Requests\Subject\DeleteSubjectRequest;
use App\Http\Requests\Subject\UpdateSubjectRequest;
use App\Models\Subject;

class SubjectRepository
{
    public function create(CreateSubjectRequest $request)
    {
        $group = new Subject();
        $group->name = $request->getName();
        $group->save();

        return $group;
    }

    public function update(UpdateSubjectRequest $request)
    {
        $group = Subject::findOrFail($request->getId());
        $group->name = $request->getName();
        $group->save();

        return $group;
    }

    public function delete(DeleteSubjectRequest $request)
    {
        return Subject::query()->where('id', '=', $request->getId())->delete();
    }
}
