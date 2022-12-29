import React, {useState} from 'react';
import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import Input from "../../../components/elements/input/Input";
import * as yup from "yup";
import './login.scss'
import {useAuthService} from "../../../services/AuthService";
import {Button} from "@mui/material";

function Login(props) {
    const authService = useAuthService()
    const [error, setError] = useState([])
    let navigate = useNavigate();
    const onSubmit = (values) => {

        authService.login(values, setError).then((data)=>{

        })
    }

    const validationsSchema = yup.object().shape({
        email: yup.string().email('Введіть корректный email').required('Обов\'язково'),
        password: yup.string().typeError('Повинно бути рядком').required('Обов\'язково'),
    })

    return (
        <Formik
            validationSchema={validationsSchema}
            initialValues={{email: "", password: ""}}
            onSubmit={async (values) => onSubmit(values)}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({errors, touched}) => (

                <Form className={'login'}>
                    <span className={'register-title'}>Авторизація</span>
                    <span className={'login-error'}>{error}</span>
                    <div className={'login-inputs'}>
                        <Input label={'Пошта'} className={'half'} type={'text'} name={'email'}
                               placeholder={'Пошта'} required={true} errors={errors}/>

                        <Input label={'Пароль'} className={'half'} type={'password'} name={'password'}
                               placeholder={'Пароль'} required={true} errors={errors}/>
                    </div>

                    <button className={'login-btn button register-button'}>Вхід</button>
                    <Button color="warning" onClick={()=>navigate('/register')}>Зареєструватись</Button>

                </Form>

            )}
        </Formik>
    );
}

export default Login;
