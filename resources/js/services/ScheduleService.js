import {_apiBase, CREATE, DELETE, GROUP_COURSE, GROUP_SCHEDULE, headers, UPDATE} from "./CONST";
import axios from 'axios';

export const useScheduleService = (state, setState) => {
    let varState = state
    let varSetState = setState

    const scheduleRoute = _apiBase + GROUP_COURSE + GROUP_SCHEDULE

    const getSchedule = (my, groupId) => {
        return axios.get(scheduleRoute, {
            params: {
                my: my,
                groupId: groupId
            }, ...headers
        }).then(function (response) {
            varSetState({...response.data, loaded: true,})
        })
    }

    const getAddScheduleData = () => {
        return axios.get(scheduleRoute + 'add_schedule_data', {...headers})
            .then(function (response) {
                varSetState({...response.data})
                return {...response.data}
            })
    }

    const addSchedule = (data) => {
        return axios.post(scheduleRoute + CREATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const editSchedule = (data) => {
        return axios.post(scheduleRoute + UPDATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const deleteSchedule = (data) => {
        return axios.post(scheduleRoute + DELETE, data, {...headers}).then(res => {
            return res.data
        })
    }

    return {getSchedule, addSchedule, getAddScheduleData, editSchedule, deleteSchedule}
}
