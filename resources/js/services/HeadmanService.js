import {_apiBase, headers, postRequest} from "./CONST";
import axios from 'axios';
import schedule from "../pages/schedule/Schedule";

export const useHeadmanService = (state, setState) => {
    let varState = state
    let varSetState = setState

    const createTeacher = (data) => {
        return axios.post(_apiBase + 'headman/teacher/create', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            // setError([])
            return res.data
        })
    }

    const updateTeacher = (data) => {
        return axios.post(_apiBase + 'headman/teacher/update', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    const deleteTeacher = (data) => {
        return axios.post(_apiBase + 'headman/teacher/delete', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    const createGroup = (data) => {
        return axios.post(_apiBase + 'headman/group/create', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            // setError([])
            return res.data
        })
    }

    const updateGroup = (data) => {
        return axios.post(_apiBase + 'headman/group/update', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    const deleteGroup = (data) => {
        return axios.post(_apiBase + 'headman/group/delete', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    const createSubject = (data) => {
        return axios.post(_apiBase + 'headman/subject/create', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            // setError([])
            return res.data
        })
    }

    const updateSubject = (data) => {
        return axios.post(_apiBase + 'headman/subject/update', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    const deleteSubject = (data) => {
        return axios.post(_apiBase + 'headman/subject/delete', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    const getAllData = (data) => {
        return axios.get(_apiBase + 'headman/get_all_data', {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
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
