import {_apiBase, getArrayErrors, headers} from "./CONST";
import axios from 'axios';

export const useAuthService = () => {

    const register = (data, setError) => {
        return axios.post(_apiBase + 'register', data, {...headers}).then(res => {
            saveRequest(res)
            return res.data
        }).catch(function (error) {
            setError(getArrayErrors(error))
        })
    }

    const login = (data, setError) => {
        return axios.post(_apiBase + 'login', data, {...headers}).then(res => {
            saveRequest(res)
            return res.data
        }).catch(function (error) {
            setError(error.response.data.message)
        })
    }

    const getOptions = () => {
        return axios.get(_apiBase + 'groupList', {...headers})
            .then(function (response) {
                return response.data.map(category => ({value: category.id, label: category.name}));
            })
    }

    const saveRequest = (res) => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', res.data.user)
        document.location.href = "/";
    }

    return {getOptions, register, login}
}
