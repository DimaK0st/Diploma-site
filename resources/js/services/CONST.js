export const postRequest = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin',
        'Access-Control-Allow-Origin': '*',
        mode: 'no-cors',
        credentials: 'same-origin',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
};

export const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin',
        'Access-Control-Allow-Origin': '*',
        mode: 'no-cors',
        credentials: 'same-origin',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
}
export const _apiBase = 'http://127.0.0.1:8000/api/v1/'
export const USER = 1
export const ADMIN = 2
export const TEACHER = 3
export const HEADMEN = 4

export const CREATE = 'create'
export const UPDATE = 'update'
export const DELETE = 'delete'

export const GROUP_HEADMAN = 'headman/'
export const GROUP_TEACHER = 'teacher/'
export const GROUP_GROUP = 'group/'
export const GROUP_SUBJECT = 'subject/'
export const GROUP_COURSE = 'course/'
export const GROUP_CONTENT = 'content/'
export const GROUP_ = ''
