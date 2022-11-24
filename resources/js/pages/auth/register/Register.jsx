import React from 'react';
import './register.scss'
import Input from "../../../components/elements/input/Input";

function Register(props) {
    return (
        <div className={'register'}>

            <span className={'register-title'}>Реєстрація</span>

            <div className={'register-fields'}>
                <Input label={'Прізвище'} className={'half'} type={'text'} name={''} placeholder={'Прізвище'}/>
                <Input label={'Ім\'я'} className={'half'} type={'text'} name={''} placeholder={'Ім\'я'}/>
                <Input label={'По батькові'} className={'half'} type={'text'} name={''}
                       placeholder={'По батькові'}/>
                <Input label={'Пошта'} className={'half'} type={'email'} name={''} placeholder={'Пошта'}/>
                <Input label={'Пароль'} className={'half'} type={'password'} name={''} placeholder={'Пароль'}/>
                <Input label={'Пароль'} className={'half'} type={'password'} name={''} placeholder={'Пароль'}/>
            </div>

            <Input label={'Група'} className={' '} type={''} name={''} placeholder={'Група'}/>

            <button className={'button register-button'}>Зареєструватись</button>

        </div>
    );
}

export default Register;
