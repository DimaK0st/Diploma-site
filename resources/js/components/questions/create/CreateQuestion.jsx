import React, {useState} from 'react';
import * as yup from "yup";
import {Form, Formik} from "formik";
import {TextField} from "@mui/material";

function CreateQuestion(props) {

    const [sendData, setSendData] = useState(
        {
            title: 'fasdfasf',
            variants: [
                {id: 0, text: '00000000', correct: false},
                {id: 1, text: '111111111', correct: false},
                {id: 2, text: '2222222222', correct: false},
            ]
        }
    )

    const validationsSchema = yup.object().shape({
        title: yup.string().required('Обов\'язково'),
        variants: yup.string().required('Обов\'язково'),
    })

    const onSubmit = (value) => {
        courseService.createCourseContent({...value, 'course_id': courseId}).then(() => {
            setActive(false)
        })
    }

    return (
        <Formik
            validationSchema={validationsSchema}
            key={new Date().toLocaleTimeString()}
            initialValues={sendData}
            onSubmit={(values) => {
                onSubmit(values)
            }}
            validateOnChange={false}
        >
            {(formik) => (
                // {({errors, touched}) => (
                <Form className={'create-course-content'}>

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

                    {
                        sendData.variants.map((item, key) => {

                            return (
                                <>
                                    {console.log({
                                        ...sendData,
                                        variants: [...sendData.variants.filter((i) => i.id !== item.id), {
                                            id: item.id,
                                            'text': 'event.target.value'
                                        }]
                                    })}

                                    <TextField
                                        id="outlined-textarea"
                                        className={'create-course-input'}
                                        key={item.id}
                                        label="Назва питання"
                                        value={item?.text}
                                        name={'title'}
                                        onChange={(event) => {
                                            formik.setFieldValue('variants', event.target.value)
                                            // formik.setFieldValue('id', value.id)
                                            setSendData({
                                                ...sendData,
                                                variants: [...sendData.variants.filter((i) => i.id !== item.id), {
                                                    id: item.id,
                                                    'text': event.target.value
                                                }]
                                            })
                                        }}
                                        placeholder="Placeholder"
                                        error={formik.errors['title']}
                                        multiline
                                    />
                                </>
                            )

                        })
                    }
                    <button className={'add'} onClick={() => setSendData({
                        ...sendData,
                        variants: [...sendData.variants, {id: sendData.variants.length, 'text': ''}]
                    })}>
                        Додати варіант
                    </button>

                </Form>
            )}
        </Formik>
    )
}

export default CreateQuestion;
