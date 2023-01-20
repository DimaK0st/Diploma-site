import React, {useEffect, useState} from 'react';
import {useScheduleService} from "../../services/ScheduleService";
import ShowDay from "../../components/schedule/ShowDay";
import Modal from "../../components/elements/modal/Modal";
import ScheduleManager from "../../components/schedule/manager-schedule/ScheduleManager";
import DeleteSchedule from "../../components/schedule/delete-schedule/DeleteSchedule";
import {useNavigate, useParams} from "react-router-dom";
import {Autocomplete, TextField} from "@mui/material";

function Schedule(props) {

    const {groupId} = useParams()
    const {my} = props

    const [state, setState] = useState({
        loaded: false,
    })
    const [days, setDays] = useState();
    const navigate = useNavigate()
    let scheduleService = useScheduleService(state, setState);

    const [active, setActive] = useState(false)
    const [modal, setModal] = useState()

    const addLesson = (subjectNum, dayId, formId, group, editData) => {
        setModal(<ScheduleManager subjectNum={subjectNum} dayId={dayId} formId={formId} group={group}
                                  setActive={setActive} editData={editData}/>)
        setActive(true)
    }

    const deleteLesson = (subjectId) => {
        setModal(<DeleteSchedule id={subjectId} setActive={setActive}/>)
        setActive(true)
    }

    useEffect(() => {
        scheduleService.getSchedule(my ? 1 : 0, groupId)
    }, [groupId])

    useEffect(() => {
        if (state.loaded && !active)
            scheduleService.getSchedule(my ? 1 : 0, groupId)
    }, [active])

    useEffect(() => {
        if (state.loaded) {
            setDays(state?.days_list?.map((value) => {
                    if (state[value.id]) {
                        return (<ShowDay root={true} addLesson={addLesson} deleteLesson={deleteLesson} group={state.group}
                                          day={value} data={state[value.id]} key={value.id}/>)
                    } else {
                        return (<ShowDay root={true} addLesson={addLesson} deleteLesson={deleteLesson} group={state.group}
                                          day={value} key={value.id}/>)
                    }
                }
            )
            )
        }
    }, [state])

    return (
        <div>
            <Modal active={active} setActive={setActive}>{modal}</Modal>

            <Autocomplete
                disablePortal
                value={state?.group}
                id="combo-box-demo"
                className={'auto-select'}
                name="evaluation"
                options={state?.groups ?? []}
                sx={{maxWidth: 300,width:'100%'}}
                onChange={(a, b) => {
                    navigate('/schedule/' + b?.id)
                }}
                renderInput={(params) => <TextField {...params} label="Група"/>}
                getOptionLabel={(option) => option.name || ""}
            />


            <div className={'day'}>
                <table border="1" style={{textAlign: "center", width: '100%'}}>
                    {days}
                </table>
            </div>
        </div>
    );
}

export default Schedule;
