import React from 'react';
import {IconButton, Link} from "@mui/material";
import './content-course.scss'
import moment from "moment-timezone";
import DeleteIcon from '@mui/icons-material/Delete';
import {User} from "../../../../services/User";

function ContentCourse(props) {
    const {content, courseService, setActive, ownerId} = props
    const user = new User()

    const deleteCourseContent = () => {
        courseService.deleteCourseContent({id: content.id}).then(() => setActive(true))
    }

    return (
        <div className={'content'}>
            <span className={'content-title'}>{content?.url !== '' ? <a href={content?.url}>{content?.title}</a> :
                <span>{content?.title}</span>}</span>
            <span className={'content-description'}>{content?.description}</span>
            <div className={'content-bottom'}>
                {
                    user.isAdmin() || user.id === ownerId ?
                        <IconButton aria-label="delete" onClick={() => deleteCourseContent()}>
                            <DeleteIcon/>
                        </IconButton> : null
                }
                <span
                    className={'content-bottom-date'}>{moment(content?.created_at + "03:00", 'YYYY-MM-DD HH:mm:ssZ').lang("ru").format('LL')}</span>
            </div>
        </div>
    );
}

export default ContentCourse;
