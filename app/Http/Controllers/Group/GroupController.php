<?php

namespace App\Http\Controllers\Group;

use App\Http\Requests\Group\CreateGroupRequest;
use App\Http\Requests\Group\DeleteGroupRequest;
use App\Http\Requests\Group\UpdateGroupRequest;
use App\Models\Group;
use Illuminate\Routing\Controller as BaseController;

class GroupController extends BaseController
{
    public function create(CreateGroupRequest $request)
    {
        $group = new Group();

        $group->name = $request->getName();
        $group->course = $request->getCourse()?:1;
        $group->faculty_id = $request->getFacultyId()?:1;

        $group->save();

        return $group;
    }

    public function update(UpdateGroupRequest $request)
    {
        $group = Group::findOrFail($request->getId());

        $group->name = $request->getName();
        $group->course = $request->getCourse()?:1;
        $group->faculty_id = $request->getFacultyId()?:1;

        $group->save();

        return $group;
    }

    public function delete(DeleteGroupRequest $request)
    {
        return Group::query()->where('id', '=', $request->getId())->delete();
    }
}
