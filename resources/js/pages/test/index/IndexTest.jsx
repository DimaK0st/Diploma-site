import React, {useEffect, useState} from 'react';
import Questions from "../../../components/questions/Questions";
import {useParams} from "react-router-dom";
import {useCourseService} from "../../../services/CourseService";
import {useTestService} from "../../../services/TestService";
import {Button} from "@mui/material";
import CreateQuestion from "../../../components/questions/create/CreateQuestion";
import Modal from "../../../components/elements/modal/Modal";
import ShowQuestion from "./question/ShowQuestion";

function IndexTest(props) {

    const [activeAddQuestion, setActiveAddQuestion] = useState()
    const [update, setUpdate] = useState()
    const [data, setData] = useState({
        loaded: false
    })
    const {testId} = useParams()
    const testService = useTestService(data, setData)


    useEffect(() => {
        testService.getTestById(testId).then(setUpdate(false))
    }, [testId, activeAddQuestion,update])

    return (
        <div>
            {console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqq',data?.data?.id)}
            <Modal active={activeAddQuestion} setActive={setActiveAddQuestion}><CreateQuestion key={data?.data?.id} testId={data?.data?.id} setActive={setActiveAddQuestion}/></Modal>

            {console.log(data?.data)}

            <div className={'course-nav'}>
                <Button variant="outlined" onClick={() => setActiveAddQuestion(true)}>Додати питання</Button>
            </div>

            <div className={'course-wrapper'}>
                <span className={'course-title'}>{data?.data?.title}</span>
                <span className={'course-description'}><strong>Опис:</strong> {data?.data?.description}</span>
            </div>
            <div>
                {data?.data?.questions?.map((item) => {
                    return <ShowQuestion setUpdate={setUpdate} question={item}/>
                })}
            </div>

        </div>
    );
}

export default IndexTest;
