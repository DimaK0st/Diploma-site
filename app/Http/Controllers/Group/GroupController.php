<?php

namespace App\Http\Controllers\Group;

use App\Http\Requests\Group\CreateGroupRequest;
use App\Http\Requests\Group\DeleteGroupRequest;
use App\Http\Requests\Group\UpdateGroupRequest;
use App\Services\GroupService;
use Illuminate\Routing\Controller as BaseController;

class GroupController extends BaseController
{
    public function __construct(private GroupService $groupService)
    {
    }

    public function create(CreateGroupRequest $request)
    {
        return $this->groupService->create($request);
    }

    public function update(UpdateGroupRequest $request)
    {
        return $this->groupService->update($request);
    }

    public function delete(DeleteGroupRequest $request)
    {
        return $this->groupService->delete($request);
    }
}
