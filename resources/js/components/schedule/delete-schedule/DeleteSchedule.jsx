import React, {useState} from 'react';
import {useScheduleService} from "../../../services/ScheduleService";
import './delete-schedule.scss'
import {Button} from "@mui/material";

function DeleteSchedule(props) {
    const [data, setData] = useState()
    const scheduleService = useScheduleService(data, setData)

    const onSubmit = () => {
        scheduleService.deleteSchedule({id: props.id}).then(props.setActive(false))
    }

    return (
        <div className={'delete-schedule'}>
            <span className={'delete-schedule-title'}>Видалити запис?</span>
            <Button onClick={onSubmit} variant="contained" color="error">Видалити</Button>
        </div>
    );
}

export default DeleteSchedule;
