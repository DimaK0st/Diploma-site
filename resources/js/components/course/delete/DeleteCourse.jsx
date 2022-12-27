import React, {useState} from 'react';
import {useScheduleService} from "../../../services/ScheduleService";
import './delete-course.scss'
import {Button} from "@mui/material";
import {useCourseService} from "../../../services/CourseService";

function DeleteSchedule(props) {
    const [data, setData] = useState()
    const courseService = useCourseService(data, setData)

    const onSubmit = () => {
        courseService.deleteCourse({id: props.id}).then(props.setActive(false))
    }

    return (
        <div className={'delete'}>
            <span className={'delete-title'}>Видалити курс?</span>
            <Button onClick={onSubmit} variant="contained" color="error">Видалити</Button>
        </div>
    );
}

export default DeleteSchedule;
