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
import {User} from "../../../services/User";
import CreateTest from "../../../pages/test/create/CreateTest";
import TestCourse from "../../../pages/test/TestCourse";
import {Helmet} from "react-helmet";

function ShowCourse() {
    const {courseId} = useParams()

    const [data, setData] = useState({
        loaded: false
    })

    const [activeCreate, setActiveCreate] = useState(false)
    const [activeCreateTest, setActiveCreateTest] = useState(false)
    const [activeUpdateCourse, setActiveUpdateCourse] = useState(false)
    const [activeDeleteCourse, setActiveDeleteCourse] = useState(false)
    const [activeDeleteCourseContent, setActiveDeleteCourseContent] = useState(false)
    const courseService = useCourseService(data, setData)
    let user = new User()
    useEffect(() => {
        courseService.getCourseById(courseId)
    }, [])

    useEffect(() => {
        courseService.getCourseById(courseId)
    }, [courseId])

    useEffect(() => {
        if (data.loaded) {
            courseService.getCourseById(courseId).then(setActiveDeleteCourseContent(false))
        }
    }, [activeCreate, activeUpdateCourse, activeDeleteCourseContent, activeCreateTest])

    return (
        <div className={'course'}>
            <Helmet>
                <title>{data?.data?.title} - EducationalSite</title>
                <meta name="description" content={data?.data?.description}/>
            </Helmet>

            <Modal active={activeCreate} setActive={setActiveCreate}>
                <CreateCourseContent courseId={courseId} setActive={setActiveCreate}/></Modal>
            <Modal active={activeUpdateCourse} setActive={setActiveUpdateCourse}>
                <UpdateCourse key={data?.data?.description} description={data?.data?.description}
                              title={data?.data?.title} id={courseId}
                              setActive={setActiveUpdateCourse}/></Modal>
            <Modal active={activeDeleteCourse} setActive={setActiveDeleteCourse}>
                <DeleteCourse id={courseId} setActive={setActiveDeleteCourse}/></Modal>
            <Modal active={activeCreateTest} setActive={setActiveCreateTest}>
                <CreateTest courseId={courseId} setActive={setActiveCreateTest}/></Modal>

            {data?.data?.user_id === user.id || user.isAdmin() ? <div className={'course-nav'}>
                <Button variant="outlined" onClick={() => setActiveCreate(true)}>Додати контент</Button>
                <Button variant="outlined" onClick={() => setActiveCreateTest(true)}>Додати тест</Button>
                <Button variant="outlined" color="warning" onClick={() => setActiveUpdateCourse(true)}>Редагувати
                    курс</Button>
                <Button variant="outlined" color="error" onClick={() => setActiveDeleteCourse(true)}>Видалити
                    курс</Button>
            </div> : null}

            <div className={'course-wrapper'}>
                <span className={'course-title'}>{data?.data?.title}</span>
                <span className={'course-description'}><strong>Опис:</strong> {data?.data?.description}</span>
            </div>
            <div className={'course-content'}>
                {(data?.data?.contents?.length) ? data?.data?.contents?.map((content) => {
                    return <ContentCourse key={content.id} content={content} setActive={setActiveDeleteCourseContent}
                                          courseService={courseService} ownerId={data?.data?.user_id}/>
                }) : <span className={'course-content-empty'}>Поки що нічого немає</span>}
            </div>
            <div className={'test-content'}>
                {(data?.data?.tests?.length) ? data?.data?.tests?.map((item) => {
                    return <TestCourse key={item.id} test={item} setActive={setActiveDeleteCourseContent}
                                       courseService={courseService} ownerId={data?.data?.user_id}/>
                }) : <span className={'course-content-empty'}>Поки що нічого немає</span>}
            </div>
        </div>
    );
}

export default ShowCourse;
