import React, {useState} from 'react';
import './show-question.scss'
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useQuestionService} from "../../../../services/QuestionService";

function ShowQuestion(props) {
    const {question, setUpdate} = props
    console.log('11111111111111111111111', question)
    const [data, setData] = useState()

    const questionService = useQuestionService(data, setData)
    const deleteQuestion = (id) => {
        questionService.deleteQuestion({id: id}).then(setUpdate(true))
    }

    return (
        <div className={'question'}>


            <span className={'question-title'}>{question?.title}</span>
            <ol>
                {question?.variants?.map((item) => {
                    if (item.correct) {
                        return <li><strong>{item.text}</strong></li>
                    } else {
                        return <li>{item.text}</li>
                    }
                })}
            </ol>
            <IconButton color="error" sx={{position: 'absolute', top: 0, right: 0}} aria-label="directions"
                        onClick={() => deleteQuestion(question.id)}>
                <DeleteIcon/>
            </IconButton>
        </div>
    );
}

export default ShowQuestion;
