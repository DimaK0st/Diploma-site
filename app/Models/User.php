<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * @property int $id
 * @property string $lastname
 * @property string $firstname
 * @property string $patronymic
 * @property string $email
 * @property string $password
 * @property int $role_id
 * @property int $group_id
 * @property string $shortFullName
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

//    protected $with = ['userFollowedById'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'lastname',
        'firstname',
        'patronymic',
        'email',
        'group_id',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    protected $appends = ['shortFullName'];

    public function groups()
    {
        return $this->hasOne(Group::class, 'id', 'group_id');
    }

    public function roles()
    {
        return $this->hasOne(Role::class, 'id', 'role_id');
    }

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class);
    }

    public function results()
    {
        return $this->belongsTo(Result::class, 'id', 'user_id');
    }

    public function getShortFullNameAttribute(): string
    {
        return $this->firstname . ' ' . mb_substr($this->lastname, 0, 1) . '.' . mb_substr($this->patronymic, 0, 1) . '.';
    }
}
