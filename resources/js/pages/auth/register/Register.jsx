import React, {useEffect, useState} from 'react';
import './register.scss'
import Input from "../../../components/elements/input/Input";
import {useAuthService} from "../../../services/AuthService";
import {Formik, Form, Field} from "formik";
import * as yup from 'yup'
import MultiSelect from "../../../components/elements/MultiSelect";
import {value} from "lodash/seq";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Register(props) {

    const authService = useAuthService()
    const [error, setError] = useState([])
    const navigate = useNavigate()
    const [options, setOptions] = useState([
        {value: 'one', label: 'One'},
        {value: 'two', label: 'Two'},
        {value: 'three', label: 'Three'},
    ])

    useEffect(() => {
        authService.getOptions().then((data) => setOptions(data));
    }, [])

    const onSubmit = (values) => {

        authService.register(values, setError).then((data)=>{
        })
    }


    const validationsSchema = yup.object().shape({
        lastname: yup.string().typeError('Повинно бути рядком').required('Обов\'язково'),
        firstname: yup.string().typeError('Повинно бути рядком').required('Обов\'язково'),
        patronymic: yup.string().typeError('Повинно бути рядком').required('Обов\'язково'),
        email: yup.string().email('Введіть корректный email').required('Обов\'язково'),
        password: yup.string().typeError('Повинно бути рядком').required('Обов\'язково')
            .min(8, "Повинно бути довше 8 символів"),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Паролі не збігаються').required('Обов\'язково')
            .min(8, "Повинно бути довше 8 символів"),
        group: yup.string().required('Обов\'язково')
    })

    return (
        <Formik
            validationSchema={validationsSchema}
            initialValues={{
                lastname: "",
                firstname: "",
                patronymic: "",
                email: "",
                password: "",
                confirmPassword: "",
                group: ""
            }}
            onSubmit={async (values) => {
                onSubmit(values)
            }}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({errors, touched}) => (
                <Form className={'register'}>

                    <span className={'register-title'}>Реєстрація</span>
                    {
                        error.map((item) => <span key={item} className={'register-error'}>{item}</span>)
                    }
                    <span className={'register-error'}>{error.message}</span>

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
                        <div className={'register-group field '+ `${(errors && errors['group']!==undefined) ? 'error' : ''}`}
                             title={errors && errors['group'] ? errors['group'] : ''} key={'group' ?? ''}>
                            <label className={'register-group-label'}>
                                Група
                            </label>
                            <Field
                                name="group"
                                id="singleSelectCustom"
                                placeholder="Single Select"
                                isMulti={false}
                                component={MultiSelect}
                                options={options}
                            />

                        </div>
                    </div>

                    <button type={"submit"} className={'button register-button'}>Зареєструватись</button>
                    <Button style={{marginBottom: '10px'}} color="success" onClick={()=>navigate('/login')}>Авторизуватись</Button>

                </Form>
            )}
        </Formik>
    );
}

export default Register;
