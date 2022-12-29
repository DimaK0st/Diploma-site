import {_apiBase, headers, postRequest} from "./CONST";
import axios from 'axios';
import schedule from "../pages/schedule/Schedule";

export const useScheduleService = (state, setState) => {
    let varState = state
    let varSetState = setState


    const getSchedule = (input, setError) => {

        return axios.get(_apiBase + 'course/schedule/1', {...headers})
            .then(function (response) {
                varSetState({...response.data, loaded: true,})
            })
            .catch(function (error) {
            });
    }

    const getAddScheduleData = (input, setError) => {
        return axios.get(_apiBase + 'course/schedule/add_schedule_data', {...headers})
            .then(function (response) {
                varSetState({...response.data})
                return {...response.data}
            })
            .catch(function (error) {
            });
    }

    const addSchedule = (data) => {
        return axios.post(_apiBase + 'course/schedule/add', data, {...headers}).then(res => {
            // setError([])
            return res.data
        })
        //     .catch(function (error) {
        //     let errors = error.response.data.errors
        //     let res = []
        //     for (let key in errors) {
        //         if(errors.hasOwnProperty(key)){
        //             res.push(`${key}: ${errors[key]}`)
        //         }
        //     }
        //     setError(res)
        // })
    }

    const editSchedule = (data) => {
        return axios.post(_apiBase + 'course/schedule/edit', data, {...headers}).then(res => {
            return res.data
        })
    }

    const deleteSchedule = (data) => {
        return axios.post(_apiBase + 'course/schedule/delete', data, {...headers}).then(res => {
            return res.data
        })
    }

    return {getSchedule,addSchedule,getAddScheduleData,editSchedule, deleteSchedule}
}
