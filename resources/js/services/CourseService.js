import {_apiBase, postRequest} from "./CONST";
import axios from 'axios';

export const useCourseService = (state, setState) => {
    let varState = state
    let varSetState = setState

    function getMyCourse() {


        return axios.get(_apiBase + 'user_course').then(res => {
            varSetState(res.data)
            return res.data

        }).catch(function (error) {
            let errors = error.response.data.errors
        })
    }

    function getAllCourse() {


        return axios.get(_apiBase + 'user_course').then(res => {
            varSetState(res.data)
            return res.data

        }).catch(function (error) {
            let errors = error.response.data.errors
        })
    }


    return {getMyCourse}
}
