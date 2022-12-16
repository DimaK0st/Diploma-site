<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property string $title
 * @property string $description
 */
class Course extends Model
{
    use HasFactory;

    public function contents()
    {
        return $this->hasMany(CourseContent::class, 'course_id', 'id');
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function tests()
    {
        return $this->belongsTo(Test::class, 'id', 'course_id');
    }
}
