<?php

namespace App\Jobs;

use App\Http\Dtos\CreateTestDTO;
use App\Http\Dtos\GeneratedAiQuestionsDTO;
use App\Services\test\TestService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class GetDataFromAi implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private CreateTestDTO $createTestDTO;
    private TestService $testService;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(CreateTestDTO $createTestDTO)
    {
        $this->createTestDTO = $createTestDTO;
        $this->testService = app(TestService::class);
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $response = Storage::get('simulateAi.json');

        $questionsDTO = new GeneratedAiQuestionsDTO($response);

        return $this->testService->createFromAi($this->createTestDTO, $questionsDTO);
    }
}
