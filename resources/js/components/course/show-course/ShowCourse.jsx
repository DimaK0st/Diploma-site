import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useCourseService} from "../../../services/CourseService";
import ContentCourse from "./content/ContentCourse";
import './show-course.scss'
import Modal from "../../elements/modal/Modal";
import CreateCourseContent from "./content/create/CreateCourseContent";
import {Button} from "@mui/material";
import UpdateCourse from "../update/UpdateCourse";
import DeleteCourse from "../delete/DeleteCourse";

function ShowCourse(props) {
    const {courseId} = useParams()

    const [data, setData] = useState({
        loaded: false
    })

    const [activeCreate, setActiveCreate] = useState(false)
    const [activeUpdateCourse, setActiveUpdateCourse] = useState(false)
    const [activeDeleteCourse, setActiveDeleteCourse] = useState(false)
    const courseService = useCourseService(data, setData)

    useEffect(() => {
        courseService.getCourseById(courseId)
    }, [])

    useEffect(() => {
        courseService.getCourseById(courseId)
    }, [courseId])

    useEffect(() => {
        if (data.loaded) {
            courseService.getCourseById(courseId)
        }
    }, [activeCreate, activeUpdateCourse])

    return (
        <div className={'course'}>
            <Modal active={activeCreate} setActive={setActiveCreate}><CreateCourseContent courseId={courseId}
                                                                                          setActive={setActiveCreate}/></Modal>
            <Modal active={activeUpdateCourse} setActive={setActiveUpdateCourse}>
                <UpdateCourse key={data?.data?.description} description={data?.data?.description}
                              title={data?.data?.title} id={courseId}
                              setActive={setActiveUpdateCourse}/></Modal>
            <Modal active={activeDeleteCourse} setActive={setActiveDeleteCourse}>
                <DeleteCourse id={courseId} setActive={setActiveDeleteCourse}/></Modal>
            <div className={'course-nav'}>
                <Button variant="outlined" onClick={() => setActiveCreate(true)}>Додати контент</Button>
                <Button variant="outlined" color="warning" onClick={() => setActiveUpdateCourse(true)}>Редагувати
                    курс</Button>
                <Button variant="outlined" color="error" onClick={() => setActiveDeleteCourse(true)}>Видалити
                    курс</Button>
            </div>

            <div className={'course-wrapper'}>
                <span className={'course-title'}>{data?.data?.title}</span>
                <span className={'course-description'}><strong>Опис:</strong> {data?.data?.description}</span>
            </div>

            <div className={'course-content'}>
                {(data?.data?.contents?.length) ? data?.data?.contents?.map((content) => {
                    return <ContentCourse content={content}/>
                }) : <span className={'course-content-empty'}>Поки що нічого немає</span>}
            </div>

        </div>
    );
}

export default ShowCourse;
