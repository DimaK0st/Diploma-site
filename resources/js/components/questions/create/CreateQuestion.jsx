import React, {useState} from 'react';
import * as yup from "yup";
import {Form, Formik} from "formik";
import {Button, FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";
import Variant from "./variant/Variant";
import {useQuestionService} from "../../../services/QuestionService";

function CreateQuestion(props) {

    const [sendData, setSendData] = useState(
        {
            test_id: 1,
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

    const validationsSchema = yup.object().shape({
        title: yup.string().required('Обов\'язково'),
        variants: yup.array().of(
            yup.object().shape({
                text: yup.string().required('Обов\'язково'),
                correct: yup.boolean(),
            })
        )
            .required('Обов\'язково'),
    })

    const onSubmit = (value) => {
        questionService.createQuestion(value).then(alert('hui'))
    }

    return (
        <Formik
            validationSchema={validationsSchema}
            // key={new Date().toLocaleTimeString()}
            initialValues={sendData}
            onSubmit={(values) => {
                onSubmit(values)
            }}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {(formik) => (
                // {({errors, touched}) => (
                <Form className={'create-course-content'}>
                    {console.log('formik', formik)}
                    {console.log('sendData', sendData)}
                    <TextField
                        id="outlined-textarea"
                        className={'create-course-input'}
                        label="Назва питання"
                        value={sendData?.title}
                        name={'title'}
                        onChange={(event) => {
                            formik.setFieldValue('title', event.target.value)
                            formik.setFieldValue('id', sendData.id)
                            setSendData({...sendData, 'title': event.target.value})
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['title']}
                        multiline
                    />

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >

                        {sendData.variants.map((item, key) => {
                            return (<>
                                <Variant key={item.id} item={item} formik={formik} setSendData={setSendData}
                                         sendData={sendData}/>
                            </>)
                        })
                        }
                    </RadioGroup>

                    <Button variant="contained" color={'warning'} style={{marginBottom: '10px'}} className={'add'}
                            onClick={() => setSendData({
                                ...sendData,
                                variants: [...sendData.variants, {id: sendData.variants.length, 'text': '', correct: false}]
                            })}>
                        Додати варіант
                    </Button>

                    <Button variant="contained" type={"submit"}>Створити питання</Button>

                </Form>
            )}
        </Formik>
    )
}

export default CreateQuestion;
