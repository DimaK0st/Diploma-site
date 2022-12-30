import React from 'react';
import './litle-course.scss'
import {Link} from 'react-router-dom';
import {Button} from "@mui/material";
import {User} from "../../../services/User";

function LittleCourse(props) {
    const {title, description, id, user, subscribe, active, setActive, courseService} = props
    const auth = new User()
    const subscribeCourse = () => {
        courseService.subscribeCourse({
            id: id, course_id: id, subscribe: subscribe,
        }).then(setActive(true))
    }

    return (<div className={'little-course'}>
            <span className={'little-course-title'}>
				<Link to={'/course/' + id}>{title} </Link> </span>
        <span className={'little-course-description'}> {description} </span>
        <div className={'little-course-bottom'}>
            <span className={'little-course-bottom-user'}> {user?.shortFullName} </span>

            {auth.isAuth() ? (subscribe ? <Button size="small" variant="contained" color="error"
                                                  onClick={() => subscribeCourse(subscribe)}>Відписатись</Button> :
                <Button size="small" variant="contained"
                        onClick={() => subscribeCourse(subscribe)}>Підписатись</Button>) : null}
        </div>
    </div>);
}

export default LittleCourse;
