<?php

namespace App\Http\Controllers\ScheduleController;

use App\Http\Requests\Schedule\DeleteScheduleRequest;
use App\Models\Day;
use App\Models\Evaluation;
use App\Models\Form;
use App\Models\Group;
use App\Models\Schedule;
use App\Models\Subject;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class ScheduleController extends BaseController
{
    public function __construct()
    {

    }

    public function showSchedule(Request $request, $group)
    {
//        $listSchedule = array(
//            "Понеділок"=>Schedule::with(['subjects', 'groups', 'days', 'teachers', 'forms', 'evaluations'])->where('day_id','=',"1")->where("group_id","=",$group)->get(),
//            "Вівторок"=>Schedule::with(['days', 'teachers', 'forms', 'subjects', 'evaluations', 'groups'])->where('day_id',"2")->where("group_id","=",$group)->get(),
//            "Середа"=>Schedule::with(['days', 'teachers', 'forms', 'subjects', 'evaluations', 'groups'])->where('day_id',"3")->where("group_id","=",$group)->get(),
//            "Четвер"=>Schedule::with(['days', 'teachers', 'forms', 'subjects', 'evaluations', 'groups'])->where('day_id',"4")->where("group_id","=",$group)->get(),
//            "П'ятниця"=>Schedule::with(['days', 'teachers', 'forms', 'subjects', 'evaluations', 'groups'])->where('day_id',"5")->where("group_id","=",$group)->get(),
//        );

        $list2 = Schedule::query()->with(['subject', 'group', 'day', 'teacher', 'form', 'evaluation'])->orderBy('day_id')->get();

        dd($list2->toArray());
        return (json_encode($listSchedule));
    }

    public function getScheduleData()
    {
        $listSchedule = Schedule::with(['day', 'teacher', 'form', 'subject', 'evaluation', 'group'])->get();
        $listGroups = Group::all();
        $listDays = Day::all();
        $listTeachers = Teacher::all();
        $listForms = Form::all();
        $listSubjects = Subject::all();
        $listEvalueations = Evaluation::all();


    }

    public function addSchedule(DeleteScheduleRequest $request)
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

    public function deleteSchedule(DeleteScheduleRequest $request)
    {

        $deleteSchedule = Schedule::query()->where('id', '=', $request->getId())->delete();

        return $deleteSchedule;
    }

}
