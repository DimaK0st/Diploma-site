import React, {useState} from 'react';
import * as yup from "yup";
import {Form, Formik} from "formik";
import {Button, RadioGroup, TextField} from "@mui/material";
import Variant from "./variant/Variant";
import {useQuestionService} from "../../../services/QuestionService";

function CreateQuestion(props) {
    const {testId, setActive} = props
    const [sendData, setSendData] = useState(
        {
            'test_id': testId,
            title: 'fasdfasf',
            variants: [
                {id: 0, text: '00000000', correct: true},
                {id: 1, text: '111111111', correct: false},
                {id: 2, text: '2222222222', correct: false},
            ]
        }
    )
    const [data, setData] = useState()
    const questionService = useQuestionService(data, setData)

    const onSubmit = (value) => {
        questionService.createQuestion(value).then(setActive(false))
    }

    return (
        <Formik
            validationSchema={validationsSchema}
            initialValues={sendData}
            onSubmit={(values) => {
                onSubmit(sendData)
            }}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {(formik) => (
                <Form className={'create-course-content'}>
                    <span className={'create-course-content-title'}>
                        {'Додавання питання'}
                    </span>
                    <TextField
                        id="outlined-textarea"
                        className={'create-course-input'}
                        label="Назва питання"
                        value={sendData?.title}
                        name={'title'}
                        onChange={(event) => {
                            formik.setFieldValue('title', event.target.value)
                            setSendData({...sendData, 'title': event.target.value, 'test_id': testId})
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['title']}
                        multiline
                    />
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                    >
                        {sendData?.variants?.map((item, key) => {
                            return (<Variant key={item.id} item={item} formik={formik} setSendData={setSendData}
                                             sendData={sendData}/>)
                        })
                        }
                    </RadioGroup>
                    <Button variant="contained" color={'warning'} style={{marginBottom: '10px'}} className={'add'}
                            onClick={() => setSendData({
                                ...sendData,
                                variants: [...sendData.variants, {
                                    id: sendData.variants.length,
                                    'text': '',
                                    correct: false
                                }]
                            })}>
                        Додати варіант
                    </Button>
                    <Button variant="contained" type={"submit"}>Створити питання</Button>
                </Form>
            )}
        </Formik>
    )
}

const validationsSchema = yup.object().shape({
    test_id: yup.string().required('Обов\'язково'),
    title: yup.string().required('Обов\'язково'),
    variants: yup.array().of(
        yup.object().shape({
            text: yup.string().required('Обов\'язково'),
            correct: yup.boolean(),
        })
    )
        .required('Обов\'язково'),
})

export default CreateQuestion;
