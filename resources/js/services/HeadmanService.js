import {
    _apiBase,
    CREATE, DELETE,
    GROUP_GROUP,
    GROUP_HEADMAN,
    GROUP_SUBJECT,
    GROUP_TEACHER,
    headers,
    postRequest, UPDATE
} from "./CONST";
import axios from 'axios';
import schedule from "../pages/schedule/Schedule";

export const useHeadmanService = (state, setState) => {
    let varState = state
    let varSetState = setState

    const teacherRoute = GROUP_HEADMAN + GROUP_TEACHER
    const groupRoute = GROUP_HEADMAN + GROUP_GROUP
    const subjectRoute = GROUP_HEADMAN + GROUP_SUBJECT

    const createTeacher = (data) => {
        return axios.post(_apiBase + teacherRoute + CREATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const updateTeacher = (data) => {
        return axios.post(_apiBase + teacherRoute + UPDATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const deleteTeacher = (data) => {
        return axios.post(_apiBase + teacherRoute + DELETE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const createGroup = (data) => {
        return axios.post(_apiBase + groupRoute + CREATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const updateGroup = (data) => {
        return axios.post(_apiBase + groupRoute + UPDATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const deleteGroup = (data) => {
        return axios.post(_apiBase + groupRoute + DELETE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const createSubject = (data) => {
        return axios.post(_apiBase + groupRoute + CREATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const updateSubject = (data) => {
        return axios.post(_apiBase + groupRoute + UPDATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const deleteSubject = (data) => {
        return axios.post(_apiBase + groupRoute + DELETE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const getAllData = (data) => {
        return axios.get(_apiBase + GROUP_HEADMAN + 'get_all_data', {...headers}).then(res => {
            varSetState(res.data)
            return res.data
        })
    }

    return {
        createTeacher,
        createGroup,
        updateTeacher,
        updateGroup,
        deleteTeacher,
        deleteGroup,
        createSubject,
        updateSubject,
        deleteSubject,
        getAllData,
    }
}
