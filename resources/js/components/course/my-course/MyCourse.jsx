import React, {useEffect, useState} from 'react';
import './my-course.scss'
import {useAuthService} from "../../../services/AuthService";
import {useCourseService} from "../../../services/CourseService";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {User} from "../../../services/User";

function MyCourse(props) {

    const {state, setState} = useState([])
    const navigate = useNavigate()
    const user = new User()

    const [search, setSearch] = useState([])

    useEffect(() => {
        const courseService = useCourseService(search, setSearch)
        console.log('user.isAuth()',user.isAuth())
        if (user.isAuth()){

            courseService.searchCourse(1, '')
        }else {
            courseService.searchCourseUnAuth(0, '')
        }
    }, [])

    return (
        <div className={'my-course'}>
            {
                user.isAuth() ? <>
                        <div className={'my-course-content'}>
                            <span className={'my-course-content-title'}>Мої курси:</span>

                            <ol>
                                {console.log('search?.data',search?.data)}
                                {
                                    search?.data?.map((item) => <li>{item.title}</li>)
                                }

                            </ol>


                        </div>
                    </> :
                    <>
                        <Button variant="contained" style={{marginBottom: '10px'}} color="success"
                                onClick={() => navigate('/login')}>Авторизуватись</Button>
                        <Button variant="contained" color="warning"
                                onClick={() => navigate('/register')}>Зареєструватись</Button>
                    </>
            }


        </div>
    );
}

export default MyCourse;
