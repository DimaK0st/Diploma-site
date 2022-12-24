<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;

/**
 * @property int $id
 * @property int $user_id
 * @property string $title
 * @property string $description
 */
class Course extends Model
{
    use HasFactory;
    protected $appends = ['subscribe'];

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

    public function getSubscribeAttribute(): int
    {
        $user = Auth::user();

        if (!$user) {
            return 0;
        }

        // if relation is not loaded already, let's do it first
        if (!array_key_exists('users', $this->relations)) {
            $this->load([
                'users' => function (BelongsToMany $builder) use ($user) {
                    $builder->where('user_id', '=', $user->id);
                },
            ]);
        }
        $related = $this->getRelation('users');

        return count($related);
    }
}
