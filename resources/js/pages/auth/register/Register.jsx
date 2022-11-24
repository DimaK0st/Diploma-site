import React from 'react';
import './register.scss'
import Input from "../../../components/elements/input/Input";
import {useAuthService} from "../../../services/AuthService";
import {Formik, Field, Form} from "formik";
import * as yup from 'yup'

function Register(props) {

    const authService = useAuthService()

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const validationsSchema = yup.object().shape({
        lastname: yup.string().typeError('Повинно бути рядком').required('Обов\'язково'),
        firstname: yup.string().typeError('Повинно бути рядком').required('Обов\'язково'),
        patronymic: yup.string().typeError('Повинно бути рядком').required('Обов\'язково'),
        email: yup.string().email('Введіть корректный email').required('Обов\'язково'),
        password: yup.string().typeError('Повинно бути рядком').required('Обов\'язково'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Паролі не збігаються').required('Обов\'язково'),
    })

    return (
        <Formik
            validationSchema={validationsSchema}
            initialValues={{lastname: "", firstname: "", patronymic: "", email: "", password: "", confirmPassword: "", text:""}}
            onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({ errors, touched }) => (
                <Form className={'register'}>

                    <span className={'register-title'}>Реєстрація</span>

                    <div className={'register-fields'}>
                        <Input label={'Прізвище'} className={'half'} type={'text'} name={'lastname'}
                               placeholder={'Прізвище'} required={true} errors={errors}/>
                        <Input label={'Ім\'я'} className={'half'} type={'text'} name={'firstname'} placeholder={'Ім\'я'}
                               required={true} errors={errors}/>
                        <Input label={'По батькові'} className={'half'} type={'text'} name={'patronymic'}
                               placeholder={'По батькові'} required={true} errors={errors}/>
                        <Input label={'Пошта'} className={'half'} type={'text'} name={'email'} placeholder={'Пошта'}
                               required={true} errors={errors}/>
                        <Input label={'Пароль'} className={'half'} type={'password'} name={'password'}
                               placeholder={'Пароль'} required={true} errors={errors}/>
                        <Input label={'Пароль'} className={'half'} type={'password'} name={'confirmPassword'}
                               placeholder={'Пароль'} required={true} errors={errors}/>
                    </div>

                    <Input label={'Група'} className={' '} type={'text'} name={'text'} placeholder={'Група'}/>

                    <button type={"submit"} className={'button register-button'}>Зареєструватись</button>

                </Form>
            )}
        </Formik>
    );
}

export default Register;
