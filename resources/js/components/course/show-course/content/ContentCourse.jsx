import React from 'react';
import {Link} from "@mui/material";
import './content-course.scss'

function ContentCourse(props) {
    const {content} = props
    return (
        <div className={'content-course'}>
            <span className={'content-course-title'}><a href={content?.url}>{content?.title}</a></span>
            <span className={'content-course-description'}>{content?.description}</span>
            <span className={'content-course-date'}>{content?.created_at}</span>
        </div>
    );
}

export default ContentCourse;
