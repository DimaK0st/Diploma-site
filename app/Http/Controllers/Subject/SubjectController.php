<?php

namespace App\Http\Controllers\Subject;

use App\Http\Requests\Group\CreateGroupRequest;
use App\Http\Requests\Group\DeleteGroupRequest;
use App\Http\Requests\Group\UpdateGroupRequest;
use App\Http\Requests\Subject\CreateSubjectRequest;
use App\Http\Requests\Subject\DeleteSubjectRequest;
use App\Http\Requests\Subject\UpdateSubjectRequest;
use App\Models\Group;
use App\Models\Subject;
use Illuminate\Routing\Controller as BaseController;

class SubjectController extends BaseController
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
