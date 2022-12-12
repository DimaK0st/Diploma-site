<?php

namespace App\Http\Requests\CourseContent;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCourseContenRequest extends FormRequest
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
            'course_id' => 'required|int',
            'title' => 'required|string',
            'description' => 'required|string',
            'url' => 'string',
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
     * @return int
     */
    public function getCourseId(): int
    {
        return $this->input('course_id');
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->input('title');
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->input('description');
    }

    /**
     * @return string
     */
    public function getUrl(): string
    {
        return $this->input('url');
    }
}
