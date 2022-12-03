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
                // return options;
            })
            .catch(function (error) {

                console.log('error', error);
            });
    }

    return {getSchedule}
}
