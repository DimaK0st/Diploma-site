import React from 'react';
import './litle-course.scss'

function LittleCourse(props) {
    const {title, description, id, user}=props

    return (
        <div className={'little-course'}>
            <span className={'little-course-title'}> {title} </span>
            <span className={'little-course-description'}> {description} </span>
            <span className={'little-course-user'}> {user?.shortFullName} </span>
        </div>
    );
}

export default LittleCourse;
