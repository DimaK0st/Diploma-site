<?php

namespace App\Jobs;

use App\Http\Dtos\QuestionsDTO;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Jumbaeric\Laragpt\Laragpt;

class GetDataFromAi implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private string $title;
    private int $count;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $title, int $count)
    {

        $this->title = $title;
        $this->count = $count;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $response = '{
  "questions": [
    {
      "question": "Яка основна функція програми PocketTracer?",
      "options": [
        {
          "answer": "Графічний дизайн",
          "correct": 0
        },
        {
          "answer": "Моделювання мереж",
          "correct": 1
        },
        {
          "answer": "Музичне створення",
          "correct": 0
        },
        {
          "answer": "Текстова переписка",
          "correct": 0
        }
      ]
    },
    {
      "question": "Яке призначення має PocketTracer?",
      "options": [
        {
          "answer": "Фільмова монтаж",
          "correct": 0
        },
        {
          "answer": "Кулінарія",
          "correct": 0
        },
        {
          "answer": "Моделювання та симуляція мережі",
          "correct": 1
        },
        {
          "answer": "Малюнок на воді",
          "correct": 0
        }
      ]
    },
    {
      "question": "Які можливості надає програма PocketTracer?",
      "options": [
        {
          "answer": "Спортивні прогнози",
          "correct": 0
        },
        {
          "answer": "Ігри віртуальної реальності",
          "correct": 0
        },
        {
          "answer": "Симуляція мережі та аналіз",
          "correct": 1
        },
        {
          "answer": "Геологічні дослідження",
          "correct": 0
        }
      ]
    },
    {
      "question": "Які дані можна аналізувати за допомогою PocketTracer?",
      "options": [
        {
          "answer": "Тренди моди",
          "correct": 0
        },
        {
          "answer": "Економічні індикатори",
          "correct": 0
        },
        {
          "answer": "Поведінку мережі",
          "correct": 1
        },
        {
          "answer": "Астрономічні спостереження",
          "correct": 0
        }
      ]
    },
    {
      "question": "Які інструменти доступні в PocketTracer для редагування зображень?",
      "options": [
        {
          "answer": "Мозаїка та колажі",
          "correct": 1
        },
        {
          "answer": "Графічні пензли",
          "correct": 0
        },
        {
          "answer": "Текстові стилі",
          "correct": 0
        },
        {
          "answer": "Музичні семпли",
          "correct": 0
        }
      ]
    },
    {
      "question": "Чому приділяється основна увага в PocketTracer?",
      "options": [
        {
          "answer": "Ігрові фічі",
          "correct": 0
        },
        {
          "answer": "Дизайн інтерфейсу",
          "correct": 0
        },
        {
          "answer": "Моделювання мереж",
          "correct": 1
        },
        {
          "answer": "Формування новин",
          "correct": 0
        }
      ]
    },
    {
      "question": "Які області використання програми PocketTracer особливо популярні?",
      "options": [
        {
          "answer": "Гастрономія",
          "correct": 0
        },
        {
          "answer": "Медицина",
          "correct": 0
        },
        {
          "answer": "Інформаційні технології",
          "correct": 1
        },
        {
          "answer": "Астрофізика",
          "correct": 0
        }
      ]
    }
  ]
}';

dd(new QuestionsDTO($response));

        $result = Laragpt::chat([
            'model' => 'gpt-3.5-turbo-0613', // required
            'messages' => [             // required
//                [
//                    "role" => "system",
//                    "content" => "You are a helpful assistant."
//                ],
//                [
//                    "role" => "user",
//                    "content" => "Who won the world series in 2020?"
//                ],
//                [
//                    "role" => "assistant",
//                    "content" => "The Los Angeles Dodgers won the World Series in 2020."
//                ],
                [
                    "role" => "user",
                    "content" => "Where was it played?"
                ],
            ],
//            'temperature' => 1.0,   //  optional
//            'max_tokens' => 4000,   //  optional
//            'frequency_penalty' => 0,   //  optional
//            'presence_penalty' => 0,    //  optional
        ]);

        dd($result);


        sleep(5);
        dd($this->title, $this->count);

    }
}
