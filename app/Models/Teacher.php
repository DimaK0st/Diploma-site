<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $surname
 * @property string $name
 * @property string $patronymic
 * @property string $email
 * @property string $shortFullName
 */
class Teacher extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $appends = ['shortFullName'];

    public function schedules()
    {
        return $this->belongsTo(Schedule::class);
    }

    public function getShortFullNameAttribute(): string
    {
        return $this->surname . ' ' . mb_substr($this->name, 0, 1) . '.' . mb_substr($this->patronymic, 0, 1) . '.';
    }
}
