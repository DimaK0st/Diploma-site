import {_apiBase, postRequest} from "./CONST";

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

}
