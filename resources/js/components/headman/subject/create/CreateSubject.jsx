import React, {useState} from 'react';
import './create-subject.scss'
import {useHeadmanService} from "../../../../services/HeadmanService";
import * as yup from "yup";
import {Form, Formik} from "formik";
import {Button, TextField} from "@mui/material";

function CreateSubject(props) {

    const {active, setActive, update} = props
    const {data, createSubject} = useHeadmanService()

    const onSubmit = (data) => {
        createSubject(data).then(setActive(false)).then(update())
    }

    const validationsSchema = yup.object().shape({
        name: yup.string().required('Обов\'язково'),
    })

    return (
        <Formik
            validationSchema={validationsSchema}
            key={new Date().toLocaleTimeString()}
            initialValues={{
                name: "",
            }}
            onSubmit={(values) => {
                onSubmit(values)
            }}
            validateOnChange={false}
        >
            {(formik) => (
                <Form className={'create-test'}>
                    <span className={'create-test-title'}>
                        {'Створити предмет'}
                    </span>
                    <TextField
                        id="outlined-textarea"
                        className={'create-test-input'}
                        label="Назва предмету"
                        name={'name'}
                        onChange={(event) => {
                            formik.setFieldValue('name', event.target.value)
                        }}
                        placeholder="Placeholder"
                        error={formik.errors['name']}
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

export default CreateSubject;
