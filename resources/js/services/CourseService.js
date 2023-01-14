import {_apiBase, CREATE, DELETE, GROUP_CONTENT, GROUP_COURSE, headers, postRequest, UPDATE} from "./CONST";
import axios from 'axios';

export const useCourseService = (state, setState) => {
    let varState = state
    let varSetState = setState

    const courseRoute = _apiBase + GROUP_COURSE
    const contentRoute = courseRoute + GROUP_CONTENT

    function getCourseById(id) {
        return axios.get(courseRoute + id, {...headers}).then(res => {
            varSetState({data: res.data, loaded: true})
            return res.data
        }).catch(function (error) {
            // let errors = error.response.data.errors
        })
    }

    function searchCourse(my, search) {
        return axios.get(courseRoute + 'search', {
            params: {
                my: my,
                search: search
            },
            ...headers
        }).then(res => {
            varSetState({data: [...res.data], loaded: true})
            return res.data

        })
    }

    function searchCourseUnAuth(my, search) {
        return axios.get(courseRoute + 'all', {
            params: {
                my: 0,
                search: ''
            },
            ...headers
        }).then(res => {
            varSetState({data: [...res.data], loaded: true})
            return res.data

        })
    }


    const createCourse = (data) => {
        return axios.post(courseRoute + CREATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const updateCourse = (data) => {
        return axios.post(courseRoute + UPDATE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const deleteCourse = (data) => {
        return axios.post(courseRoute + DELETE, data, {...headers}).then(res => {
            return res.data
        })
    }

    const subscribeCourse = (data) => {
        return axios.post(courseRoute + 'subscribe_course', data, {...headers}).then(res => {
            return res.data
        })
    }

    const createCourseContent = (data) => {
        return axios.post(contentRoute + CREATE, data, {...headers}).then(res => {
            return res.data
        })

    }
    const deleteCourseContent = (data) => {
        return axios.post(contentRoute + DELETE, data, {...headers}).then(res => {
            return res.data
        })

    }


    return {
        getCourseById,
        searchCourse,
        createCourse,
        updateCourse,
        deleteCourse,
        createCourseContent,
        subscribeCourse,
        deleteCourseContent,
        searchCourseUnAuth,
    }
}
