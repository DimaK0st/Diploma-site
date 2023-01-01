import React, {useState} from 'react';
import {useHeadmanService} from "../../../../services/HeadmanService";
import * as yup from "yup";
import {Form, Formik} from "formik";
import {Button, TextField} from "@mui/material";
import './create-teacher.scss'

function CreateTeacher(props) {

    const {active, setActive} = props
    const [data, setData] = useState()
    const headmanService = useHeadmanService(data,setData)

    const onSubmit = (data)=>{
        headmanService.createTeacher(data).then(setActive(false))
    }
    const validationsSchema = yup.object().shape({
        surname: yup.string().required('Обов\'язково'),
        name: yup.string().required('Обов\'язково'),
        patronymic: yup.string().required('Обов\'язково'),
    })

    return (
        <Formik
            validationSchema={validationsSchema}
            key={new Date().toLocaleTimeString()}
            initialValues={{
                surname: "",
                name: "",
                patronymic: "",
                email: "",
            }}
            onSubmit={(values) => {
                onSubmit(values)
            }}
            validateOnChange={false}
        >
            {(formik) => (
                <Form className={'create-teacher'}>
                    <span className={'create-test-title'}>
                        {'Додавання вчителя'}
                    </span>
                    <TextField
                        id="outlined-textarea"
                        className={'create-test-input'}
                        label="Прізвище"
                        name={'surname'}
                        onChange={(event) => {
                            formik.setFieldValue('surname', event.target.value)
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['surname']}
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        className={'create-test-input'}
                        label="Ім'я"
                        name={'name'}
                        onChange={(event) => {
                            formik.setFieldValue('name', event.target.value)
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['name']}
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        className={'create-test-input'}
                        label="По батькові"
                        name={'patronymic'}
                        onChange={(event) => {
                            formik.setFieldValue('patronymic', event.target.value)
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['patronymic']}
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        className={'create-test-input'}
                        label="Пошта"
                        name={'email'}
                        onChange={(event) => {
                            formik.setFieldValue('email', event.target.value)
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['email']}
                        multiline
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

export default CreateTeacher;
