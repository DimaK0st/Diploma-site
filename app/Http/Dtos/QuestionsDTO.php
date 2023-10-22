<?php

namespace App\Http\Dtos;

class QuestionsDTO {
    public array $questions = []; // Массив объектов QuestionDTO

    public function __construct(array|string $data)
    {
        if (is_string($data)) {
            $data = json_decode($data, true);
        }
        $this->fill($data);
    }

    private function fill(array $data)
    {
        foreach ($data['questions'] as $questionData) {
            $this->questions[] = new QuestionDTO($questionData);
        }
    }
}
