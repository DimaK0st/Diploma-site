import React from 'react';
import './main.scss'
import MyCourse from "../../components/course/my-course/MyCourse";

function Main(props) {
    return (
        <div className={'main'}>
            <div className={'main-left'}>
                <MyCourse/>
            </div>
            <div className={'main-center'}>
                {props.children}
            </div>
        </div>
    );
}

export default Main;
