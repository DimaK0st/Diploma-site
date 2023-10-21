import {_apiBase, CREATE, DELETE, GENERATE, GROUP_COURSE, GROUP_TEST, headers, UPDATE} from "./CONST";
import axios from 'axios';

export const useTestService = (state, setState) => {
    let varState = state
    let varSetState = setState

    const testRoute = _apiBase + GROUP_COURSE + GROUP_TEST

    const createTest = (data) => {
        return axios.post(testRoute + CREATE, data, {...headers}).then(res => {
            return res.data
        })
    }
    const generateTest = (data) => {
        return axios.post(testRoute + GENERATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const updateTest = (data) => {
        return axios.post(testRoute + UPDATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const deleteTest = (data) => {
        return axios.post(testRoute + DELETE, data, {...headers}).then(res => {
            return res.data
        })
    }

    function getTestById(id) {
        return axios.get(testRoute + id, {...headers}).then(res => {
            varSetState({data: res.data, loaded: true})
            return res.data
        })
    }

    function getResultByTestId(id) {
        return axios.get(testRoute + 'results/' + id, {...headers}).then(res => {
            varSetState(res.data)
            return res.data
        })
    }

    return {createTest, generateTest, updateTest, deleteTest, getTestById, getResultByTestId}
}
