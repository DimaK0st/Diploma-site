import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useCourseService} from "../../../services/CourseService";
import ContentCourse from "./content/ContentCourse";
import './show-course.scss'
import Modal from "../../elements/modal/Modal";
import CreateCourseContent from "./content/create/CreateCourseContent";

function ShowCourse(props) {
    const {courseId} = useParams()

    const [data, setData]= useState({
        loaded:false
    })
    const [active, setActive] = useState(false)
    const courseService = useCourseService(data, setData)

    useEffect(()=>{
        courseService.getCourseById(courseId)
    },[])

    useEffect(()=>{
        courseService.getCourseById(courseId)
    },[courseId])

    useEffect(()=>{
        if (data.loaded&& !active){
        courseService.getCourseById(courseId)}
    },[active])

    return (
        <div className={'course'}>
            {console.log('data?.data',data?.data)}
            <Modal active={active} setActive={setActive}><CreateCourseContent courseId={courseId} setActive={setActive}/></Modal>
            <button onClick={() => setActive(true)}>vbxcxcbxvcb</button>

            <div className={'course-wrapper'}>
                <span className={'course-title'}>{data?.data?.title}</span>
                <span className={'course-description'}><strong>Опис:</strong> {data?.data?.description}</span>
            </div>

            <div className={'course-content'}>
                {(data?.data?.contents?.length)?data?.data?.contents?.map((content)=>{
                    return <ContentCourse content={content}/>
                }): <span className={'course-content-empty'}>Поки що нічого немає</span>}
            </div>

        </div>
    );
}

export default ShowCourse;
