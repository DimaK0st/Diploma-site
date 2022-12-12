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

    function searchCourse(my, search) {
        return axios.get(_apiBase + 'course/search', {
            params: {
                my: my!=='',
                search: search
            },
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            console.log('res', res)
            varSetState(res.data)
            return res.data

        }).catch(function (error) {
            console.log(error)
            // let errors = error.response.data.errors
        })
    }

    function getAllCourse(my, search) {
        return axios.get(_apiBase + 'course/all', {
            params: {
                my: my!=='',
                title: search
            },
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            varSetState(res.data)
            return res.data

        }).catch(function (error) {
            let errors = error.response.data.errors
        })
    }


    return {getMyCourse, getAllCourse, searchCourse}
}
