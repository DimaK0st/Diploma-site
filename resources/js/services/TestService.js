import {_apiBase, headers, postRequest} from "./CONST";
import axios from 'axios';
import schedule from "../pages/schedule/Schedule";

export const useTestService = (state, setState) => {
    let varState = state
    let varSetState = setState

    const createTest = (data) => {
        return axios.post(_apiBase + 'course/test/create', data, {
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

    const updateTest = (data) => {
        return axios.post(_apiBase + 'course/test/update', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    const deleteTest = (data) => {
        return axios.post(_apiBase + 'course/test/delete', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    function getTestById(id) {
        return axios.get(_apiBase + 'course/test/' + id, {...headers}).then(res => {
            varSetState({data: res.data, loaded: true})
            return res.data
        }).catch(function (error) {
            // let errors = error.response.data.errors
        })
    }

    return {createTest,updateTest,deleteTest,getTestById}
}
