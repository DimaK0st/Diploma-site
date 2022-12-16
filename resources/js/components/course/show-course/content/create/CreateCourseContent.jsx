import React, {useState} from 'react';
import {Form, Formik} from "formik";
import * as yup from "yup";
import {Button, TextField} from "@mui/material";
import './create-course-content.scss'
import {useCourseService} from "../../../../../services/CourseService";

function CreateCourseContent(props) {

    const {setActive, courseId} = props
    const [data, setData] = useState([])
    const courseService = useCourseService(data, setData)

    const validationsSchema = yup.object().shape({
        title: yup.string().required('Обов\'язково'),
        description: yup.string().required('Обов\'язково'),
        url: yup.string(),
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
            initialValues={{
                title: "",
                description: "",
                url: "",
            }}
            onSubmit={(values) => {
                onSubmit(values)
            }}
            validateOnChange={false}
        >
            {(formik) => (
                // {({errors, touched}) => (
                <Form className={'create-course-content'}>
                    <span className={'create-course-content-title'}>
                        {'Додавання контенту'}
                    </span>
                    <TextField
                        id="outlined-textarea"
                        className={'create-course-content-input'}
                        label="Назва матеріалу"
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
                        className={'create-course-content-input'}
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
                        id="outlined-textarea"
                        className={'create-course-content-input'}
                        label="Посилання на матеріал"
                        name={'url'}
                        onChange={(event) => {
                            formik.setFieldValue('url', event.target.value)
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['url']}
                        multiline
                    />

                    <div className={'create-course-content-submit'}>
                        <Button className={'create-course-content-submit-btn'} type={"submit"}
                                variant="contained">Додати</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default CreateCourseContent;
