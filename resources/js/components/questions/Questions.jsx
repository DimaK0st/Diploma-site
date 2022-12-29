import React, {useEffect, useState} from 'react';
import './questions.scss'
import {useNavigate, useParams} from "react-router-dom";
import {useTestService} from "../../services/TestService";
import {useQuestionService} from "../../services/QuestionService";

function Questions(props) {

    const {testId} = useParams()
    const navigate = useNavigate()
    const [questions, setQuestions] = useState([])
    const questionService = useQuestionService(questions, setQuestions)
    useEffect(() => {
        questionService.getQuestionById(testId).then((data) => {
            if (data.length === 0) {
                navigate('/')
            }
        })
    }, [testId])

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerOptionClick = (correct) => {
        if (correct) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions?.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            questionService.saveResult({
                'test_id': testId,
                result: Math.floor(score / questions.length * 100)
            }).then(() => {
                setTimeout(() => navigate('/'), 3000)
            })
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
                                <span>Питання {currentQuestion + 1}</span> / {questions?.length}
                            </div>
                            <div className={'test-question-text'}>
                                {questions[currentQuestion]?.title}
                            </div>
                        </div>

                        <div className={'test-answer'}>
                            {questions[currentQuestion]?.variants.map(item => (
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
