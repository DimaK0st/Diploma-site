<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    public $timestamps = false;


    public function days(){
        return $this->belongsTo(Day::class , 'day_id','id' );
    }

    public function teachers(){
        return $this->belongsTo(Teacher::class , 'teacher_id' ,'id');
    }

    public function forms(){
        return $this->belongsTo(Form::class , 'form_id','id' );
    }

    public function subjects(){
        return $this->belongsTo(Subject::class , 'subject_id' ,'id');
    }

    public function groups(){
        return $this->belongsTo(Group::class, 'group_id', 'id');
    }

    public function evaluations(){
        return $this->belongsTo(Evaluation::class, 'evaluation_id' ,'id');
    }




}
