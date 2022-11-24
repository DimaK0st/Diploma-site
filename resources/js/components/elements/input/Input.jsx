import React from 'react';
import './input.scss'
import {ErrorMessage, Field} from "formik";

function Input(props) {
    const {label, className, name, type, placeholder, required, errors} = props

    // required={required??false}
    return (

        <div className={'field ' + ` ${(errors && errors[name]!==undefined) ? 'error' : ''}`}
             title={errors && errors[name] ? errors[name] : ''} key={name ?? ''}>
            <span className={'field-label'}>{label ?? ''}</span>
            <Field className={'field-input' + ` ${className ?? ''}`} type={type ?? 'text'} name={name ?? ''}
                   placeholder={placeholder}/>
        </div>
    );
}

export default Input;