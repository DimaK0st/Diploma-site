import React from 'react';
import './modal.scss'

function Modal(props) {
    const {active, setActive, children} = props

    return (
        <div className={'modalc' + `${active ? ' active' : ''}`} onClick={() => setActive(false)}>
            <div className={'modalc-content' + `${active ? ' active' : ''}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
