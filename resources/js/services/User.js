import {ADMIN, TEACHER} from "./CONST";

export class User {

    constructor() {
        let jsonStr = JSON.parse(localStorage.getItem('user'))

        this.id = jsonStr?.id?? null
        this.email = jsonStr?.email?? null
        this.firstname = jsonStr?.firstname?? null
        this.lastname = jsonStr?.lastname?? null
        this.patronymic = jsonStr?.patronymic?? null
        this.shortFullName = jsonStr?.shortFullName?? null
        this.role_id = jsonStr?.role_id?? null
        this.group_id = jsonStr?.group_id?? null
    }

    isAuth() {
        return !!localStorage.getItem('user')
    }

    isAdmin() {
        return this.role_id === ADMIN
    }

    isTeacher() {
        return this.role_id === TEACHER
    }
}

