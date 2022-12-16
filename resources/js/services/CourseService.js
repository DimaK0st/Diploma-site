import {_apiBase, postRequest} from "./CONST";
import axios from 'axios';

export const useCourseService = (state, setState) => {
    let varState = state
    let varSetState = setState

    function getCourseById(id) {
        return axios.get(_apiBase + 'course/' + id, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            console.log('res', res)
            console.log('{data: [...res.data], loaded:true}',res.data)
            console.log('{data: [...res.data], loaded:true}',{data: res.data, loaded:true})

            varSetState({data: res.data, loaded:true})
            return res.data
        }).catch(function (error) {
            // let errors = error.response.data.errors
        })
    }

    function searchCourse(my, search) {
        return axios.get(_apiBase + 'course/search', {
            params: {
                my: my,
                search: search
            },
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            console.log('res', res)
            varSetState({data: [...res.data], loaded:true})
            return res.data

        }).catch(function (error) {
            console.log(error)
            // let errors = error.response.data.errors
        })
    }


    const createCourse = (data) => {
        return axios.post(_apiBase + 'course/create', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    const createCourseContent = (data) => {
        console.log('adfasdfasfasdffas', data)
        return axios.post(_apiBase + 'course/content/create', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        })
    }

    return {getCourseById, searchCourse, createCourse,createCourseContent}
}
