<?php

namespace App\Services;

use App\Http\Requests\Subject\CreateSubjectRequest;
use App\Http\Requests\Subject\DeleteSubjectRequest;
use App\Http\Requests\Subject\UpdateSubjectRequest;
use App\Models\Subject;
use App\Repositories\SubjectRepository;

class SubjectService
{
    public function __construct(private SubjectRepository $subjectRepository)
    {
    }

    public function create(CreateSubjectRequest $request)
    {
        return $this->subjectRepository->create($request);
    }

    public function update(UpdateSubjectRequest $request)
    {
        return $this->subjectRepository->update($request);
    }

    public function delete(DeleteSubjectRequest $request)
    {
        return $this->subjectRepository->delete($request);
    }
}
