import {_apiBase, headers, postRequest} from "./CONST";
import axios from 'axios';

export const useQuestionService = (state, setState) => {
    let varState = state
    let varSetState = setState
    const createQuestion = (data, setError) => {
        return axios.post(_apiBase + 'course/test/question/create', data, {...headers}).then(res => {
            setError([])
            // document.location.href="/";

            return res.data
        }).catch(function (error) {
            // let errors = error.response.data.errors
            // let res = []
            // for (let key in errors) {
            //     if(errors.hasOwnProperty(key)){
            //         res.push(`${key}: ${errors[key]}`)
            //     }
            // }
            // setError(res)
        })
    }

    const deleteQuestion = (data) => {
        return axios.post(_apiBase + 'course/test/question/delete', data, {...headers}).then(res => {
            return res.data
        })
    }

    const getQuestionById = (id) => {
        return axios.get(_apiBase + 'course/test/question/'+id, {...headers}).then(res => {
            varSetState(res.data)
            return res.data
        })
    }

    const saveResult = (data) => {
        return axios.post(_apiBase + 'course/test/result/create',data, {...headers}).then(res => {
        })
    }

    return {createQuestion,deleteQuestion,getQuestionById,saveResult}
}
