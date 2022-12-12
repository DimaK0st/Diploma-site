import {_apiBase, postRequest} from "./CONST";
import axios from 'axios';

export const useAuthService = () => {


    const register = (data, setError) => {
        return axios.post(_apiBase + 'register', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            setError([])
            return res.data
        }).catch(function (error) {
            let errors = error.response.data.errors
            let res = []
            for (let key in errors) {
                if(errors.hasOwnProperty(key)){
                    res.push(`${key}: ${errors[key]}`)
                }
            }

            setError(res)
        })
    }

    const login = (data) => {
        return axios.post(_apiBase + 'login', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            setError([])
            return res.data
        }).catch(function (error) {
            let errors = error.response.data.errors
            let res = []
            for (let key in errors) {
                if(errors.hasOwnProperty(key)){
                    res.push(`${key}: ${errors[key]}`)
                }
            }

            setError(res)
        })
    }


    const getOptions = (input, setError) => {

        return axios.get('http://127.0.0.1:8000/api/v1/groupList')
            .then(function (response) {
                let options = response.data.map( category => ({ value: category.title, label: category.label }));
                return options;
            })
            .catch(function (error) {
            });
    }

    return {getOptions, register, login}
}
