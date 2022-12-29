import {_apiBase, headers, postRequest} from "./CONST";
import axios from 'axios';

export const useCourseService = (state, setState) => {
    let varState = state
    let varSetState = setState

    function getCourseById(id) {
        return axios.get(_apiBase + 'course/' + id, {...headers}).then(res => {
            varSetState({data: res.data, loaded: true})
            return res.data
        }).catch(function (error) {
            // let errors = error.response.data.errors
        })
    }

    function searchCourse(my, search) {
        console.log('...headers', {...headers})
        return axios.get(_apiBase + 'course/search', {
            params: {
                my: my,
                search: search
            },
            ...headers
        }).then(res => {
            console.log('res', res)
            varSetState({data: [...res.data], loaded: true})
            return res.data

        })
    }

    function searchCourseUnAuth(my, search) {
        return axios.get(_apiBase + 'course/all', {
            params: {
                my: 0,
                search: ''
            },
            ...headers
        }).then(res => {
            console.log('res', res)
            varSetState({data: [...res.data], loaded: true})
            return res.data

        })
    }


    const createCourse = (data) => {
        return axios.post(_apiBase + 'course/create', data, {...headers}).then(res => {
            return res.data
        })
    }

    const updateCourse = (data) => {
        return axios.post(_apiBase + 'course/update', data, {...headers}).then(res => {
            return res.data
        })
    }

    const deleteCourse = (data) => {
        return axios.post(_apiBase + 'course/delete', data, {...headers}).then(res => {
            return res.data
        })
    }

    const subscribeCourse = (data) => {
        console.log('adfasdfasfasdffas', data)
        return axios.post(_apiBase + 'course/subscribe_course', data, {...headers}).then(res => {
            return res.data
        })
    }

    const createCourseContent = (data) => {
        console.log('adfasdfasfasdffas', data)
        return axios.post(_apiBase + 'course/content/create', data, {...headers}).then(res => {
            return res.data
        })

    }
    const deleteCourseContent = (data) => {
        console.log('adfasdfasfasdffas', data)
        return axios.post(_apiBase + 'course/content/delete', data, {...headers}).then(res => {
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
