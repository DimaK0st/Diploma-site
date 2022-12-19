import React from 'react';
import './main.scss'

function Main(props) {
    return (
        <div className={'main'}>
            <div className={'main-left'}>

            </div>
            <div className={'main-center'}>
                {props.children}
            </div>
        </div>
    );
}

export default Main;
