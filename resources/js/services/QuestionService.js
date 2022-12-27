import {_apiBase, headers, postRequest} from "./CONST";
import axios from 'axios';

export const useQuestionService = () => {

    const createQuestion = (data, setError) => {
        return axios.post(_apiBase + 'course/test/question/create', data, {...headers}).then(res => {
            setError([])
            // document.location.href="/";

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

    const login = (data, setError) => {
        return axios.post(_apiBase + 'login', data, {...headers}).then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', res.data.user)
            document.location.href="/";
            return res.data
        }).catch(function (error) {
            let errors = error.response.data.errors
            setError(error.response.data.message)
        })
    }


    const getOptions = (input, setError) => {

        return axios.get('http://127.0.0.1:8000/api/v1/groupList', {...headers})
            .then(function (response) {
                let options = response.data.map( category => ({ value: category.id, label: category.name }));

                return options;
            })
            .catch(function (error) {
            });
    }

    return {createQuestion}
}
