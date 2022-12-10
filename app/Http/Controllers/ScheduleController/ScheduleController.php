<?php

namespace App\Http\Controllers\ScheduleController;

use App\Http\Requests\Schedule\AddScheduleRequest;
use App\Http\Requests\Schedule\DeleteScheduleRequest;
use App\Http\Requests\Schedule\EditScheduleRequest;
use App\Services\ScheduleService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class ScheduleController extends BaseController
{
    public function __construct(private ScheduleService $scheduleService)
    {
    }

    public function showSchedule(Request $request, $group)
    {
        return $this->scheduleService->index($group);
    }

    public function addSchedule(AddScheduleRequest $request)
    {
        return $this->scheduleService->create($request);
    }

    public function editSchedule(EditScheduleRequest $request)
    {
        return $this->scheduleService->update($request);
    }

    public function getAddScheduleData(Request $request)
    {
        return $this->scheduleService->getCreateScheduleData();
    }

    public function deleteSchedule(DeleteScheduleRequest $request)
    {
        return $this->scheduleService->delete($request);
    }
}
