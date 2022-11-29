import {_apiBase, postRequest} from "./CONST";
import axios from 'axios';

export const useAuthService = () => {


    const register = (data) => {
        console.log('1')
        return axios.post(_apiBase + 'register', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            console.log('2')

            console.log(res)
            return res.data
        })
    }

    const login = () => {

    }


    const getOptions = (input) => {

        return axios.get('http://127.0.0.1:8000/api/v1/groupList')
            .then(function (response) {
                console.log('response',response)
                console.log('response.data',response.data)
                let options = response.data.map( category => ({ value: category.title, label: category.label }));
                console.log('{ options }', options)
                return options;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return {getOptions, register, login}
}
