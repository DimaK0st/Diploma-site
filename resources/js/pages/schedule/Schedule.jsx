import React, {useEffect, useState} from 'react';
import {useScheduleService} from "../../services/ScheduleService";
import ShowDay from "../../components/schedule/ShowDay";

function Schedule(props) {

    const [state, setState] = useState({
        loaded: false,
    })

    const [days, setDays] = useState();

    console.log('22222222222222222222222222', state)

    useEffect(() => {
        let scheduleService = useScheduleService(state, setState);

        scheduleService.getSchedule()

    }, [])


    let res = []

    useEffect(() => {
        if (state.loaded) {
            console.log('state.days_list', state.days_list)
            console.log('state.wqeekhgajfkgajkdfgajkdgjaksdf', state)
            state.days_list.map((value) => {
                    if (state[value.id]) {
                        console.log('push huila1')
                        res.push(<ShowDay day={value} data={state[value.id]}/>)
                    } else {
                        console.log('push huila2')
                        console.log('2')
                        // res.push(<ShowDay name={value.name}/>)
                    }
                }
            )
            setDays(res)
            console.log('pizda',res)
        }
    }, [state])


    return (
        <div>
            ---------------1
            {days}
            ------------2
        </div>
    );
}

export default Schedule;
