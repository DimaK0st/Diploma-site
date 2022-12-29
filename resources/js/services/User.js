import {ADMIN} from "../CONST";
import {TEACHER} from "./CONST";

export class User {

    constructor() {
        let jsonStr = JSON.parse(localStorage.getItem('user'))

        this.id = jsonStr?.id
        this.email = jsonStr?.email
        this.firstname = jsonStr?.firstname
        this.lastname = jsonStr?.lastname
        this.patronymic = jsonStr?.patronymic
        this.shortFullName = jsonStr?.shortFullName
        this.role_id = jsonStr?.role_id
        this.group_id = jsonStr?.group_id
    }

    isAuth(){
        return !!localStorage.getItem('user')
    }

    isAdmin(){
        return this.role_id===ADMIN
    }

    isTeacher(){
        return this.role_id===TEACHER
    }
}

