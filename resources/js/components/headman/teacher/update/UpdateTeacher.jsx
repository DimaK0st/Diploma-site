import React, {useState} from 'react';
import {Form, Formik} from "formik";
import {Button, TextField} from "@mui/material";
import {useHeadmanService} from "../../../../services/HeadmanService";
import * as yup from "yup";

function UpdateGroup(props) {

    const {active, setActive, editData,updateComponent} = props
    const [data, setData] = useState(editData)
    const headmanService = useHeadmanService(data, setData)

    const onSubmit = (data) => {
        headmanService.updateTeacher(data).then(setActive(false)).then(()=>updateComponent())
    }

    const validationsSchema = yup.object().shape({
        surname: yup.string().required('Обов\'язково'),
        name: yup.string().required('Обов\'язково'),
        patronymic: yup.string().required('Обов\'язково'),
        email: yup.string().required('Обов\'язково'),
    })

    return (
        <Formik
            validationSchema={validationsSchema}
            key={data.id}
            initialValues={data}
            onSubmit={(values) => {
                onSubmit(values)
            }}
            validateOnChange={false}
        >
            {(formik) => (
                <Form className={'create-test'}>
                    <span className={'create-test-title'}>
                        {'Додавання групи'}
                    </span>
                    <TextField
                        id="outlined-textarea"
                        className={'create-test-input'}
                        label="Прізвище"
                        name={'surname'}
                        value={data?.surname}
                        onChange={(event) => {
                            formik.setFieldValue('surname', event.target.value)
                            setData(()=>({...data, surname:event.target.value}))
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
                        value={data?.name}
                        onChange={(event) => {
                            formik.setFieldValue('name', event.target.value)
                            setData(()=>({...data, name:event.target.value}))
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
                        value={data?.patronymic}
                        onChange={(event) => {
                            formik.setFieldValue('patronymic', event.target.value)
                            setData(()=>({...data, patronymic:event.target.value}))
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
                        value={data?.email}
                        onChange={(event) => {
                            formik.setFieldValue('email', event.target.value)
                            setData(()=>({...data, email:event.target.value}))
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

export default UpdateGroup;
