import React from 'react';
import './litle-course.scss'
import { Link } from 'react-router-dom';

function LittleCourse(props) {
    const {title, description, id, user}=props

    return (
        <div className={'little-course'}>
            <span className={'little-course-title'}>
				<Link to={'/course/'+id}>{title}</Link> </span>
            <span className={'little-course-description'}> {description} </span>
            <span className={'little-course-user'}> {user?.shortFullName} </span>
        </div>
    );
}

export default LittleCourse;
