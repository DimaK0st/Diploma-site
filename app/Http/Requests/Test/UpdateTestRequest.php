<?php

namespace App\Http\Requests\Test;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTestRequest extends FormRequest
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
            'title' => 'required|string',
            'description' => 'required|string',
            'course-id' => 'required|int',
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
    public function getTitle(): string
    {
        return $this->input('title');
    }

    /**
     * @return int
     */
    public function getCourseId(): int
    {
        return $this->input('course-id');
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->input('description');
    }

}
