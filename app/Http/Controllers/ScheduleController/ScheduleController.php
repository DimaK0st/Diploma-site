<?php

namespace App\Http\Controllers\ScheduleController;

use App\Http\Requests\Schedule\AddScheduleRequest;
use App\Http\Requests\Schedule\DeleteScheduleRequest;
use App\Http\Requests\Schedule\EditScheduleRequest;
use App\Services\ScheduleService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends BaseController
{
    public function __construct(private ScheduleService $scheduleService)
    {
    }

    public function showSchedule(Request $request)
    {
        $group = (int)$request->get('groupId');
        $my = (bool)$request->get('my');
//dd($my);
        if ($my){
            $group = Auth::user()->group_id;
        }
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
