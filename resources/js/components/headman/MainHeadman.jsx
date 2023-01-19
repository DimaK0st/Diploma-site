import React, {useCallback, useEffect, useState} from 'react';
import Modal from "../elements/modal/Modal";
import './main-headman.scss'
import CreateTeacher from "./teacher/create/CreateTeacher";
import {useHeadmanService} from "../../services/HeadmanService";
import ShowGroups from "./group/show/ShowGroups";
import ShowTeachers from "./teacher/show/ShowTeachers";
import ShowSubjects from "./subject/show/ShowSubjects";
import CreateSubject from "./subject/create/CreateSubject";

function MainHeadman(props) {
    const [activeCreateTeacher, setActiveCreateTeacher] = useState()
    const [activeCreateSubject, setActiveCreateSubject] = useState()

    const [data, setData] = useState()
    const headmanService = useHeadmanService(data, setData)

    const [update, setUpdate] = useState(null)

    const updateComponent = useCallback(()=> {
        setUpdate((update) => !update)
    }, [])
    //
    // useEffect(() => {
    //     headmanService.getAllData()
    // }, [])

    useEffect(() => {
        headmanService.getAllData()
    }, [update])

    return (
        <div className={'main-headman'}>
            <ShowGroups groups={data?.groups} updateComponent={updateComponent}/>
            <ShowTeachers teachers={data?.teachers} updateComponent={updateComponent}/>
            <ShowSubjects subjects={data?.subjects} updateComponent={updateComponent}/>
        </div>
    );
}

export default MainHeadman;
