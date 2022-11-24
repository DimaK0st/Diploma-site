import React from 'react';
import './input.scss'

function Input(props) {
    const {label, className, name, type, placeholder} = props


    return (
        <div className={'field'}>
            <span className={'field-label'}>{label ?? ''}</span>
            <input className={'field-input' + ` ${className ?? ''}`} type={type ?? 'text'} name={name ?? ''} placeholder={placeholder}/>
        </div>
    );
}

export default Input;
