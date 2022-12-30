<?php

namespace App\Http\Requests\Group;

use Illuminate\Foundation\Http\FormRequest;

class UpdateGroupRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'required|int',
            'name' => 'required|string',
            'course' => 'nullable|string',
            'faculty_id' => 'nullable|int',
        ];
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->input('id');
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->input('name');
    }

    /**
     * @return int
     */
    public function getCourse(): int|null
    {
        return $this->input('course');
    }

    /**
     * @return string
     */
    public function getFacultyId(): int|null
    {
        return $this->input('faculty_id');
    }

}
