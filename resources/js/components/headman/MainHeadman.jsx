import React, {useEffect, useState} from 'react';
import Modal from "../elements/modal/Modal";
import UpdateTest from "../../pages/test/update/UpdateTest";
import CreateGroup from "./group/create/CreateGroup";
import {Button} from "@mui/material";
import './main-headman.scss'
import CreateTeacher from "./teacher/create/CreateTeacher";
import CreateSubject from "./subject/CreateSubject";
import {useHeadmanService} from "../../services/HeadmanService";
import IndexGroup from "./group/index/IndexGroup";
import ShowGroups from "./group/show/ShowGroups";
import ShowTeachers from "./teacher/show/ShowTeachers";

function MainHeadman(props) {
    const [activeCreateTeacher, setActiveCreateTeacher] = useState()
    const [activeCreateSubject, setActiveCreateSubject] = useState()

    const [data, setData] = useState()
    const headmanService = useHeadmanService(data, setData)

    const [update, setUpdate] = useState()

    const updateComponent = () => {
        setUpdate((update) => !update)
    }

    useEffect(() => {
        headmanService.getAllData()
    }, [])

    useEffect(() => {
        headmanService.getAllData()
    }, [update])

    return (
        <div className={'main-headman'}>
            <Modal active={activeCreateTeacher} setActive={setActiveCreateTeacher}><CreateTeacher
                setActive={setActiveCreateTeacher}/></Modal>
            <Modal active={activeCreateSubject} setActive={setActiveCreateSubject}><CreateSubject
                setActive={setActiveCreateSubject}/></Modal>

            <ShowGroups groups={data?.groups} updateComponent={updateComponent}/>
            <ShowTeachers teachers={data?.teachers} updateComponent={updateComponent}/>
            {console.log('data?.teachers',data?.teachers)}
            <div className={'main-headman-wrapper'}>
                <Button onClick={() => setActiveCreateTeacher(true)} style={{marginBottom: "10px", marginTop: "10px"}}
                        variant="contained">Додати вчителя</Button>
            </div>
            <div className={'main-headman-wrapper'}>
                <Button onClick={() => setActiveCreateSubject(true)} variant="contained">Додати предмет</Button>

            </div>
        </div>
    );
}

export default MainHeadman;
