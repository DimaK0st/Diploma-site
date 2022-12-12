import React, {useState} from 'react';
import './my-course.scss'
import {useAuthService} from "../../../services/AuthService";
import {useCourseService} from "../../../services/CourseService";

function MyCourse(props) {

    const {state, setState}= useState([])

    const authService = useCourseService()



    return (
        <div className={'course'}>



        </div>
    );
}

export default MyCourse;
