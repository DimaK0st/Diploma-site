<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;
    public $timestamps = false;
    public function faculties(){
        return $this->hasOne(Faculty::class,  'id','faculty_id');
    }

    public function schedules(){
        return $this->hasOne(Schedule::class,  'id','faculty_id');
    }

    public function users(){
        return $this->belongsTo(User::class);
    }

}
