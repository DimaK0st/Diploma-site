import React, {useState} from 'react';
import {useCourseService} from "../../../services/CourseService";
import {Form, Formik} from "formik";
import * as yup from "yup";
import {Autocomplete, Button, TextField} from "@mui/material";
import './crate-test.scss'
import {useTestService} from "../../../services/TestService";

function CreateTest(props) {

    const {setActive,courseId}=props
    const [data, setData]= useState([])
    const testService = useTestService(data, setData)


    const validationsSchema = yup.object().shape({
        title: yup.string().required('Обов\'язково'),
        description: yup.string().required('Обов\'язково'),
    })

    const onSubmit=(value)=>{
        testService.createTest(value).then(()=>{setActive(false)})
    }

    return (
        <Formik
            validationSchema={validationsSchema}
            key={new Date().toLocaleTimeString()}
            initialValues={{
                title: "",
                description: "",
                'course-id':courseId,
                'count':0,
            }}
            onSubmit={(values) => {
                onSubmit(values)
            }}
            validateOnChange={false}
        >
            {(formik) => (
                <Form className={'create-test'}>
                    <span className={'create-test-title'}>
                        {'Додавання тесту'}
                    </span>
                    <TextField
                        id="outlined-textarea"
                        className={'create-test-input'}
                        label="Назва тесту"
                        name={'title'}
                        onChange={(event) => {
                            formik.setFieldValue('title', event.target.value)
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['title']}
                        multiline
                    />

                    <TextField
                        id="outlined-textarea"
                        className={'create-test-input'}
                        label="Опис"
                        name={'description'}
                        onChange={(event) => {
                            formik.setFieldValue('description', event.target.value)
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['description']}
                        multiline
                    />

                    <TextField
                        type="number"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        id="outlined-textarea"
                        className={'create-test-input'}
                        label="Кількість питань"
                        name={'count'}
                        onChange={(event) => {
                            formik.setFieldValue('count', event.target.value)
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['count']}
                    />

                    <div className={'create-test-submit'}>
                        <Button className={'create-test-submit-btn'} type={"submit"}
                                variant="contained">Додати</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default CreateTest;
