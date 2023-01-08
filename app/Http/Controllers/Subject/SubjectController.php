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
use App\Repositories\SubjectRepository;
use App\Services\SubjectService;
use Illuminate\Routing\Controller as BaseController;

class SubjectController extends BaseController
{

    public function __construct(private SubjectService $subjectService)
    {
    }

    public function create(CreateSubjectRequest $request)
    {
        return $this->subjectService->create($request);
    }

    public function update(UpdateSubjectRequest $request)
    {
        return $this->subjectService->update($request);
    }

    public function delete(DeleteSubjectRequest $request)
    {
        return $this->subjectService->delete($request);
    }
}
