export const postRequest = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin',
        'Access-Control-Allow-Origin': '*',
        mode: 'no-cors',
        credentials: 'same-origin',
    },

};

export const _apiBase = 'http://127.0.0.1:8000/api/v1/'