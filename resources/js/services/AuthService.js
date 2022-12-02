import {_apiBase, postRequest} from "./CONST";
import axios from 'axios';

export const useAuthService = () => {


    const register = (data, setError) => {
        console.log('1')
        return axios.post(_apiBase + 'register', data, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            console.log('2')
            setError([])

            return res.data

        }).catch(function (error) {
            console.log('error',error);
            console.log('error.response.data.errors',error.response.data.errors);
            let errors = error.response.data.errors
            let res = []
            for (let key in errors) {
                if(errors.hasOwnProperty(key)){
                    console.log(`${key} : ${errors[key]}`)
                    res.push(`${key}: ${errors[key]}`)
                }
            }

            setError(res)
            console.log('res',res);
        })
    }

    const login = () => {

    }


    const getOptions = (input, setError) => {

        return axios.get('http://127.0.0.1:8000/api/v1/groupList')
            .then(function (response) {
                console.log('response',response)
                console.log('response.data',response.data)
                let options = response.data.map( category => ({ value: category.title, label: category.label }));
                console.log('{ options }', options)
                return options;
            })
            .catch(function (error) {

                console.log('error',error);
            });
    }

    return {getOptions, register, login}
}
