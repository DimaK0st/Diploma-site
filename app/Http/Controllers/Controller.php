<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Subject;
use App\Models\Teacher;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getGroupList()
    {

        return Group::all()->toArray();
    }

    public function getHeadmanData()
    {
        return [
            'groups' => Group::all()->toArray(),
            'teachers' => Teacher::all()->toArray(),
            'subjects' => Subject::all()->toArray(),
            ];
    }
}
