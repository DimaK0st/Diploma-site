<?php

namespace App\Http\Requests\Subject;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSubjectRequest extends FormRequest
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
}
