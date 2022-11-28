import React from 'react';
import {Form, Formik} from "formik";
import Input from "../../../components/elements/input/Input";
import * as yup from "yup";
import './login.scss'

function Login(props) {

    const validationsSchema = yup.object().shape({
        email: yup.string().email('Введіть корректный email').required('Обов\'язково'),
        password: yup.string().typeError('Повинно бути рядком').required('Обов\'язково'),
    })

    return (
        <Formik
            validationSchema={validationsSchema}
            initialValues={{email: "", password: ""}}
            onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({errors, touched}) => (

                <Form className={'login'}>
                    <span className={'register-title'}>Авторизація</span>

                    <div className={'login-inputs'}>
                        <Input label={'Пошта'} className={'half'} type={'text'} name={'email'}
                               placeholder={'Пошта'} required={true} errors={errors}/>

                        <Input label={'Пароль'} className={'half'} type={'password'} name={'password'}
                               placeholder={'Пароль'} required={true} errors={errors}/>
                    </div>

                    <button className={'login-btn button register-button'}>Вхід</button>
                </Form>
                
            )}
        </Formik>
    );
}

export default Login;
