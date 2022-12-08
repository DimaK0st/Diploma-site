import React, {useEffect, useState} from 'react';
import {useScheduleService} from "../../services/ScheduleService";
import ShowDay from "../../components/schedule/ShowDay";
import Modal from "../../components/elements/modal/Modal";
import AddSchedule from "../../components/schedule/add-schedule/AddSchedule";

function Schedule(props) {
    const [state, setState] = useState({
        loaded: false,
    })
    const [days, setDays] = useState();

    const [active, setActive] = useState(false)
    const [modal, setModal] = useState()

    const addLesson = (subjectNum, dayId, formId, group) => {
        setModal(<AddSchedule subjectNum={subjectNum} dayId={dayId} formId={formId} group={group} />)
        setActive(true)
    }

    useEffect(() => {
        let scheduleService = useScheduleService(state, setState);
        scheduleService.getSchedule()
    }, [])

    let res = []

    useEffect(() => {
        if (state.loaded) {
            state.days_list.map((value) => {
                    if (state[value.id]) {
                        res.push(<ShowDay addLesson={addLesson} group={state.group} day={value} data={state[value.id]}/>)
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
