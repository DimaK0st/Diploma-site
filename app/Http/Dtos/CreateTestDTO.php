<?php

namespace App\Http\Dtos;

use App\Http\Requests\Test\CreateTestRequest;

/**
 * Class CreateTestDTO
 * @package App\Http\Dtos
 * @property string $title
 * @property string $description
 * @property int $count
 * @property int $courseId
 */
class CreateTestDTO {

    // Напиши дто для следующих данных: $request->getTitle(), $request->getDescription(), $request->getCount()


    public function __construct(
        public string $title,
        public string $description,
        public int $count,
        public int $courseId
    ) {
    }

    public static function fromRequest(CreateTestRequest $request): self
    {
        return new self(
            $request->getTitle(),
            $request->getDescription(),
            $request->getCount(),
            $request->getCourseId()
        );
    }

}
