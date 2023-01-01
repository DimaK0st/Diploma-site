import React, {useState} from 'react';
import {useCourseService} from "../../../services/CourseService";
import {Form, Formik} from "formik";
import * as yup from "yup";
import {Autocomplete, Button, TextField} from "@mui/material";
import './update-test.scss'
import {useTestService} from "../../../services/TestService";

function UpdateTest(props) {

    const {setActive,id ,title,description,count}=props
    const [data, setData]= useState([])
    const [value, setValue]= useState({
        'id':id,
        'title':title,
        'description':description,
        'count':count,
    })
    const testService = useTestService(data, setData)

    const validationsSchema = yup.object().shape({
        title: yup.string().required('Обов\'язково'),
        description: yup.string().required('Обов\'язково'),
    })

    const onSubmit=(value)=>{
        testService.updateTest(value).then(()=>{setActive(false)})
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
                <Form className={'create-course'}>
                    <span className={'create-course-title'}>
                        {'Редагування тесту'}
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


                    <TextField
                        type="number"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        id="outlined-textarea"
                        value={value?.count}
                        className={'create-test-input'}
                        label="Кількість виведення"
                        name={'count'}
                        onChange={(event) => {
                            formik.setFieldValue('count', event.target.value)
                            setValue((data)=>({...data,'count':event.target.value}))
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['count']}
                    />

                    <div className={'create-course-submit'}>
                        <Button className={'create-course-submit-btn'} type={"submit"}
                                variant="contained">Редагувати</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default UpdateTest;
