<?php

namespace App\Services;

use App\Http\Requests\Schedule\AddScheduleRequest;
use App\Http\Requests\Schedule\DeleteScheduleRequest;
use App\Http\Requests\Schedule\EditScheduleRequest;
use App\Repositories\ScheduleRepository;

class ScheduleService
{
    public function __construct(private ScheduleRepository $scheduleRepository)
    {
    }

    public function index(int $groupId){
        return $this->scheduleRepository->index($groupId);
    }

    public function create(AddScheduleRequest $request)
    {
        return $this->scheduleRepository->create($request);
    }

    public function getCreateScheduleData(){
        return $this->scheduleRepository->getCreateScheduleData();
    }

    public function update(EditScheduleRequest $request)
    {
        return $this->scheduleRepository->update($request);
    }

    public function delete(DeleteScheduleRequest $request)
    {
        return $this->scheduleRepository->delete($request);
    }

}
