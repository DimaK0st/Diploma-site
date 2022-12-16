import {_apiBase, postRequest} from "./CONST";
import axios from 'axios';
import schedule from "../pages/schedule/Schedule";

export const useScheduleService = (state, setState) => {
    let varState = state
    let varSetState = setState


    const getSchedule = (input, setError) => {

        return axios.get(_apiBase + 'schedule/1',{
            headers: {
                ...postRequest.headers
            }
        })
            .then(function (response) {
                varSetState({...response.data, loaded: true,})
            })
            .catch(function (error) {
            });
    }

    const getAddScheduleData = (input, setError) => {
        return axios.get(_apiBase + 'schedule/add_schedule_data')
            .then(function (response) {
                varSetState({...response.data})
                return {...response.data}
            })
            .catch(function (error) {
            });
    }

    const addSchedule = (data) => {
        return axios.post(_apiBase + 'schedule/add', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
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
        return axios.post(_apiBase + 'schedule/edit', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    const deleteSchedule = (data) => {
        return axios.post(_apiBase + 'schedule/delete', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    return {getSchedule,addSchedule,getAddScheduleData,editSchedule, deleteSchedule}
}
