import React from 'react';
import {Link} from "@mui/material";
import './content-course.scss'
import moment from "moment-timezone";

function ContentCourse(props) {
    const {content} = props
    return (
        <div className={'content'}>
            <span className={'content-title'}>{content?.url!==''?<a href={content?.url}>{content?.title}</a> :<span>{content?.title}</span> }</span>
            <span className={'content-description'}>{content?.description}</span>
            <span className={'content-date'}>{ moment(content?.created_at + "03:00", 'YYYY-MM-DD HH:mm:ssZ').lang("ru").format('LL')}</span>
        </div>
    );
}

export default ContentCourse;
