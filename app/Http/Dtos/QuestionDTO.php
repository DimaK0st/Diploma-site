<?php

namespace App\Http\Dtos;

class QuestionDTO {
    public $question = '';
    public $options = [];

    public function __construct(array|string $data)
    {
        if (is_string($data)) {
            $data = json_decode($data, true);
        }
        $this->fill($data);
    }

    private function fill(array $data)
    {
        $this->question = $data['question'];

        foreach ($data['options'] as $optionData) {
            $this->options[] = new OptionDTO($optionData);
        }
    }
}
