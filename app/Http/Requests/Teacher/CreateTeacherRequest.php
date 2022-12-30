<?php

namespace App\Http\Requests\Teacher;

use Illuminate\Foundation\Http\FormRequest;

class CreateTeacherRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'surname' => 'required|string',
            'name' => 'required|string',
            'patronymic' => 'required|string',
            'email' => 'nullable|string',
        ];
    }

    /**
     * @return string
     */
    public function getSurname(): string
    {
        return $this->input('surname');
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->input('name');
    }

    /**
     * @return string
     */
    public function getPatronymic(): string
    {
        return $this->input('patronymic');
    }

    /**
     * @return string|null
     */
    public function getEmail(): string|null
    {
        return $this->input('email');
    }
}
