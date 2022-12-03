<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    use HasFactory;
    public $timestamps = false;
    public function groups(){
        return $this->belongsTo(Group::class,'faculty_id','id');
    }
}