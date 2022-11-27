import {_apiBase, postRequest} from "./CONST";
import axios from 'axios';

export const useAuthService = () => {


    const register = () => {
        return axios.post(_apiBase + 'register', {}, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            console.log(res)
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

    return {getOptions, }
}
