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

export const useHeadmanService = (state, setState) => {
    let varState = state
    let varSetState = setState

    const teacherRoute = _apiBase + GROUP_HEADMAN + GROUP_TEACHER
    const groupRoute = _apiBase + GROUP_HEADMAN + GROUP_GROUP
    const subjectRoute = _apiBase + GROUP_HEADMAN + GROUP_SUBJECT

    const createTeacher = (data) => {
        return axios.post(teacherRoute + CREATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const updateTeacher = (data) => {
        return axios.post(teacherRoute + UPDATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const deleteTeacher = (data) => {
        return axios.post(teacherRoute + DELETE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const createGroup = (data) => {
        return axios.post(groupRoute + CREATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const updateGroup = (data) => {
        return axios.post(groupRoute + UPDATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const deleteGroup = (data) => {
        return axios.post(groupRoute + DELETE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const createSubject = (data) => {
        return axios.post(subjectRoute + CREATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const updateSubject = (data) => {
        return axios.post(subjectRoute + UPDATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const deleteSubject = (data) => {
        return axios.post(subjectRoute + DELETE, data, {...headers}).then(res => {
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
