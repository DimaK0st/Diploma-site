import React, {useEffect, useState} from 'react';
import './my-course.scss'
import {useCourseService} from "../../../services/CourseService";
import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {User} from "../../../services/User";

function MyCourse(props) {
    const navigate = useNavigate()
    const user = new User()
    const [search, setSearch] = useState([])

    useEffect(() => {
        const courseService = useCourseService(search, setSearch)
        if (user.isAuth()){

            courseService.searchCourse(1, '')
        }else {
            courseService.searchCourseUnAuth(0, '')
        }
    }, [])

    const getInitials = function (string) {
        let names = string.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();
        let count = (names.length-1>8)?8:names.length-1

        for(let i=1; i<count; i++){
            initials += names[i].substring(0, 1).toUpperCase();
        }
        return initials;
    };

    return (
        <div className={'my-course'}>
            {
                user.isAuth() ? <>
                        <div className={'my-course-content'}>
                            <span className={'my-course-content-title'}>Мої курси:</span>
                            <ol>
                                {
                                    // search?.data?.map((item) => <li><Link relative="path" to={'/course/'+item.id}>{item.title}</Link></li>)
                                    search?.data?.map((item) => <li><Link relative="path" to={'/course/'+item.id}>{getInitials(item.title)}</Link></li>)
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
