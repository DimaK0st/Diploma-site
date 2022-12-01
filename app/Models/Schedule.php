<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $course
 * @property int $group_id
 * @property int $day_id
 * @property int $subject_num
 * @property int $teacher_id
 * @property int $form_id
 * @property int $subject_id
 * @property int $evaluation_id
 */
class Schedule extends Model
{
    use HasFactory;
    public $timestamps = false;


    public function day(){
        return $this->belongsTo(Day::class , 'day_id','id' );
    }

    public function teacher(){
        return $this->belongsTo(Teacher::class , 'teacher_id' ,'id');
    }

    public function form(){
        return $this->belongsTo(Form::class , 'form_id','id' );
    }

    public function subject(){
        return $this->belongsTo(Subject::class , 'subject_id' ,'id');
    }

    public function group(){
        return $this->belongsTo(Group::class, 'group_id', 'id');
    }

    public function evaluation(){
        return $this->belongsTo(Evaluation::class, 'evaluation_id' ,'id');
    }




}
