<?php

namespace App\Repositories;

use App\Http\Requests\Schedule\AddScheduleRequest;
use App\Http\Requests\Schedule\DeleteScheduleRequest;
use App\Http\Requests\Schedule\EditScheduleRequest;
use App\Models\Day;
use App\Models\Evaluation;
use App\Models\Form;
use App\Models\Group;
use App\Models\Schedule;
use App\Models\Subject;
use App\Models\Teacher;

class ScheduleRepository
{

    public function index($groupId)
    {
        $list2 = Schedule::query()->with(['subject', 'group', 'day', 'teacher', 'form', 'evaluation'])->orderBy('day_id')->get();

        $collection = collect($list2->toArray());
        $grouped = $collection->sortBy('form')->groupBy(['day_id', 'subject_num']);
        $grouped ['days_list'] = Day::all();
        $grouped ['group'] = Group::findOrFail($groupId);

        return (json_encode($grouped));
    }

    public function create(AddScheduleRequest $request)
    {
        $schedule = new Schedule();
        $schedule->course = $request->getCourse();
        $schedule->group_id = $request->getGroupId();
        $schedule->day_id = $request->getDayId();
        $schedule->subject_num = $request->getSubjectNum();
        $schedule->teacher_id = $request->getTeacherId();
        $schedule->form_id = $request->getFormId();
        $schedule->subject_id = $request->getSubjectId();
        $schedule->evaluation_id = $request->getEvaluationId();

        $schedule->save();
        return $schedule;
    }

    public function getCreateScheduleData()
    {
        return [
            'teachers' => Teacher::query()->distinct('surname',
                'name',
                'patronymic')->get(),
            'forms' => Form::all(),
            'subjects' => Subject::all(),
            'evaluations' => Evaluation::all(),
        ];
    }

    public function update(EditScheduleRequest $request)
    {
        $schedule = Schedule::findOrFail($request->getId());

        $schedule->course = $request->getCourse();
        $schedule->group_id = $request->getGroupId();
        $schedule->day_id = $request->getDayId();
        $schedule->subject_num = $request->getSubjectNum();
        $schedule->teacher_id = $request->getTeacherId();
        $schedule->form_id = $request->getFormId();
        $schedule->subject_id = $request->getSubjectId();
        $schedule->evaluation_id = $request->getEvaluationId();

        $schedule->save();

        return $schedule;
    }

    public function delete(DeleteScheduleRequest $request)
    {
        return Schedule::query()->where('id', '=', $request->getId())->delete();
    }

}
