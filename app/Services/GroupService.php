<?php

namespace App\Services;

use App\Http\Requests\Group\CreateGroupRequest;
use App\Http\Requests\Group\DeleteGroupRequest;
use App\Http\Requests\Group\UpdateGroupRequest;
use App\Repositories\GroupRepository;

class GroupService
{
    public function __construct(private GroupRepository $groupRepository)
    {
    }

    public function create(CreateGroupRequest $request)
    {
        return $this->groupRepository->create($request);
    }

    public function update(UpdateGroupRequest $request)
    {
        return $this->groupRepository->update($request);
    }

    public function delete(DeleteGroupRequest $request)
    {
        return $this->groupRepository->delete($request);
    }
}
