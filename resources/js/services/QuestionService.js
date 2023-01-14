import {
    _apiBase,
    CREATE,
    DELETE,
    GROUP_COURSE,
    GROUP_QUESTION,
    GROUP_RESULT,
    GROUP_TEST,
    headers,
    postRequest
} from "./CONST";
import axios from 'axios';

export const useQuestionService = (state, setState) => {
    let varState = state
    let varSetState = setState

    const testRoute = _apiBase + GROUP_COURSE + GROUP_TEST
    const questionRoute = testRoute + GROUP_QUESTION
    const resultRoute = testRoute + GROUP_RESULT

    const createQuestion = (data, setError) => {
        return axios.post(GROUP_QUESTION + CREATE, data, {...headers}).then(res => {
            setError([])
            return res.data
        })
    }

    const deleteQuestion = (data) => {
        return axios.post(questionRoute + DELETE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const getQuestionById = (id) => {
        return axios.get(questionRoute + id, {...headers}).then(res => {
            varSetState(res.data)
            return res.data
        })
    }

    const saveResult = (data) => {
        return axios.post(resultRoute + CREATE, data, {...headers}).then(res => {
        })
    }

    return {createQuestion, deleteQuestion, getQuestionById, saveResult}
}
