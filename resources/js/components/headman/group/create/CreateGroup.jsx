import React, {useState} from 'react';
import './create-group.scss'
import {useHeadmanService} from "../../../../services/HeadmanService";
import * as yup from "yup";
import {Form, Formik} from "formik";
import {Button, TextField} from "@mui/material";

function CreateGroup(props) {

    const {active, setActive, update} = props
    const {data, createGroup} = useHeadmanService()

    const onSubmit = (data) => {
        console.log('hui', data)
        createGroup(data).then(setActive(false)).then(update())
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
                        {'Додавання групи'}
                    </span>
                    <TextField
                        id="outlined-textarea"
                        className={'create-test-input'}
                        label="Назва групи"
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

export default CreateGroup;
