import React, {useState} from 'react';
import './questions.scss'

function Questions(props) {

    const questions = [
        {
            question: 'Aloha havayou',
            variants: [
                {text: 'Variant 1', correct: false},
                {text: 'Variant 21', correct: true},
                {text: 'Variant 3', correct: false},
                {text: 'Variant 4', correct: false},
            ]
        },
        {
            question: 'Aloha havayou2',
            variants: [
                {text: 'Variant 1', correct: false},
                {text: 'Variant 22', correct: true},
                {text: 'Variant 3', correct: false},
                {text: 'Variant 4', correct: false},
            ]
        },
        {
            question: 'Aloha havayou3',
            variants: [
                {text: 'Variant 1', correct: false},
                {text: 'Variant 23', correct: true},
                {text: 'Variant 3', correct: false},
                {text: 'Variant 4', correct: false},
            ]
        },
        {
            question: 'Aloha havayou4',
            variants: [
                {text: 'Variant 1', correct: false},
                {text: 'Variant 24', correct: true},
                {text: 'Variant 3', correct: false},
                {text: 'Variant 4', correct: false},
            ]
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerOptionClick = (correct) => {
        if (correct) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className={'test'}>
            {
                showScore ?
                    <div className={'test-score'}>
                        Вірних відповідей {score} з {questions.length}
                    </div> : <>
                        <div className={'test-question'}>
                            <div className={'test-question-count'}>
                                <span>Питання {currentQuestion + 1}</span> / {questions.length}
                            </div>
                            <div className={'test-question-text'}>
                                {questions[currentQuestion].question}
                            </div>
                        </div>

                        <div className={'test-answer'}>
                            {questions[currentQuestion].variants.map(item => (
                                <button onClick={() => handleAnswerOptionClick(item.correct)}>
                                    {item.text}</button>
                            ))}
                        </div>
                    </>
            }
        </div>
    );
}

export default Questions;
