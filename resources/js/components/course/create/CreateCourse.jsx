import React, {useState} from 'react';
import {useCourseService} from "../../../services/CourseService";
import {Form, Formik} from "formik";
import * as yup from "yup";
import {Button, TextField} from "@mui/material";
import './create-course.scss'

function CreateCourse(props) {
    const {setActive} = props
    const [data, setData] = useState([])
    const courseService = useCourseService(data, setData)

    const validationsSchema = yup.object().shape({
        title: yup.string().required('Обов\'язково'),
        description: yup.string().required('Обов\'язково'),
    })

    const onSubmit = (value) => {
        courseService.createCourse(value).then(() => {
            setActive(false)
        })
    }

    return (
        <Formik
            validationSchema={validationsSchema}
            key={new Date().toLocaleTimeString()}
            initialValues={{
                title: "",
                description: "",
            }}
            onSubmit={(values) => {
                onSubmit(values)
            }}
            validateOnChange={false}
        >
            {(formik) => (
                <Form className={'create-course'}>
                    <span className={'create-course-title'}>
                        {'Додавання курсу'}
                    </span>
                    <TextField
                        id="outlined-textarea"
                        className={'create-course-input'}
                        label="Назва курсу"
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
                        className={'create-course-input'}
                        label="Опис"
                        name={'description'}
                        onChange={(event) => {
                            formik.setFieldValue('description', event.target.value)
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['description']}
                        multiline
                    />
                    <div className={'create-course-submit'}>
                        <Button className={'create-course-submit-btn'} type={"submit"}
                                variant="contained">Додати</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default CreateCourse;
