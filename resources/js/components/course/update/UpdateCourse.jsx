import React, {useState} from 'react';
import {useCourseService} from "../../../services/CourseService";
import {Form, Formik} from "formik";
import * as yup from "yup";
import {Autocomplete, Button, TextField} from "@mui/material";
import './update-course.scss'
function CreateCourse(props) {

    const {setActive,id ,title,description}=props
    const [data, setData]= useState([])
    const [value, setValue]= useState({
        'id':id,
        'title':title,
        'description':description,
    })
    const courseService = useCourseService(data, setData)

    const validationsSchema = yup.object().shape({
        title: yup.string().required('Обов\'язково'),
        description: yup.string().required('Обов\'язково'),
    })

    const onSubmit=(value)=>{
        courseService.updateCourse(value).then(()=>{setActive(false)})
        console.log('aaaaaaaaaaaaaaaaa', value)
    }

    return (
        <Formik
            validationSchema={validationsSchema}
            initialValues={value?value:{
                id: "",
                title: "",
                description: "",
            }}
            onSubmit={(values) => {
                onSubmit(values)
            }}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {(formik) => (
                // {({errors, touched}) => (
                <Form className={'create-course'}>
                    <span className={'create-course-title'}>
                        {'Редагування курсу'}
                    </span>
                    <input type={'hidden'} name={'id'} value={value?.id}/>
                    <TextField
                        id="outlined-textarea"
                        className={'create-course-input'}
                        label="Назва курсу"
                        value={value?.title}
                        name={'title'}
                        onChange={(event) => {
                            formik.setFieldValue('title', event.target.value)
                            formik.setFieldValue('id', value.id)
                            setValue({...value,'title':event.target.value})
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['title']}
                        multiline
                    />

                    <TextField
                        id="outlined-textarea"
                        className={'create-course-input'}
                        label="Опис"
                        value={value?.description}
                        name={'description'}
                        onChange={(event) => {
                            formik.setFieldValue('description', event.target.value)
                            setValue((data)=>({...data,'description':event.target.value}))
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
