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
        headmanService.updateGroup(data).then(setActive(false)).then(()=>updateComponent())
    }

    const validationsSchema = yup.object().shape({
        name: yup.string().required('Обов\'язково'),
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
                        label="Назва групи"
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
