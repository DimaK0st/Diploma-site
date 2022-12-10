import React, {useEffect, useState} from 'react';
import {useScheduleService} from "../../services/ScheduleService";
import ShowDay from "../../components/schedule/ShowDay";
import Modal from "../../components/elements/modal/Modal";
import ScheduleManager from "../../components/schedule/manager-schedule/ScheduleManager";
import {root} from "postcss";
import DeleteSchedule from "../../components/schedule/delete-schedule/DeleteSchedule";

function Schedule(props) {
    const [state, setState] = useState({
        loaded: false,
    })
    const [days, setDays] = useState();
    let scheduleService = useScheduleService(state, setState);

    const [active, setActive] = useState(false)
    const [modal, setModal] = useState()

    const addLesson = (subjectNum, dayId, formId, group,editData) => {
        setModal(<ScheduleManager subjectNum={subjectNum} dayId={dayId} formId={formId} group={group} setActive={setActive} editData={editData}/>)
        setActive(true)
    }

    const deleteLesson = (subjectId) => {
        setModal(<DeleteSchedule id={subjectId} setActive={setActive}/>)
        setActive(true)
    }

    useEffect(() => {
        scheduleService.getSchedule()
    }, [])

    useEffect(() => {
        if (state.loaded && !active)
        scheduleService.getSchedule()
    }, [active])

    let res = []

    useEffect(() => {
        if (state.loaded) {
            state.days_list.map((value) => {
                    // if (state[value.id]) {
                    if (value.id===2) {
                        res.push(<ShowDay root={true} addLesson={addLesson} deleteLesson={deleteLesson} group={state.group} day={value} data={state[value.id]}/>)
                    } else {
                        console.log('2')
                        // res.push(<ShowDay name={value.name}/>)
                    }
                }
            )
            setDays(res)
        }
    }, [state])

    return (
        <div>
            <Modal active={active} setActive={setActive}>{modal}</Modal>
            <button onClick={() => setActive(true)}>vbxcxcbxvcb</button>
            ---------------1
            {days}
            ------------2
        </div>
    );
}

export default Schedule;
