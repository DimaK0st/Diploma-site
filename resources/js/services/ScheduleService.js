import {_apiBase, postRequest} from "./CONST";
import axios from 'axios';
import schedule from "../pages/schedule/Schedule";

export const useScheduleService = (state, setState) => {
    let varState = state
    let varSetState = setState


    const getSchedule = (input, setError) => {

        return axios.get(_apiBase + 'schedule/1')
            .then(function (response) {
                varSetState({...response.data, loaded: true,})
            })
            .catch(function (error) {
            });
    }

    const getAddScheduleData = (input, setError) => {

        return axios.get(_apiBase + 'schedule/add_schedule_data')
            .then(function (response) {
                console.log(JSON.parse(
                    JSON.stringify(response.data),
                    (key, value) => key === 'value' ? 'new value' : value
                ))
                varSetState({...response.data})
                varSetState(JSON.parse(
                    JSON.stringify(response.data),
                    (key, value) => key === 'value' ? 'new value' : value
                ))
            })
            .catch(function (error) {
            });
    }

    const addSchedule = (data) => {
        return axios.post(_apiBase + 'schedule/add_schedule', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            setError([])
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

    return {getSchedule,addSchedule,getAddScheduleData}
}
