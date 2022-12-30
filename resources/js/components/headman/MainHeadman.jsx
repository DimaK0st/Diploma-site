import React, {useState} from 'react';
import Modal from "../elements/modal/Modal";
import UpdateTest from "../../pages/test/update/UpdateTest";
import CreateGroup from "./group/create/CreateGroup";
import {Button} from "@mui/material";
import './main-headman.scss'
import CreateTeacher from "./teacher/create/CreateTeacher";
import CreateSubject from "./subject/CreateSubject";

function MainHeadman(props) {
    const [activeCreateTeacher, setActiveCreateTeacher]=useState()
    const [activeCreateGroup, setActiveCreateGroup]=useState()
    const [activeCreateSubject, setActiveCreateSubject]=useState()


    return (
        <div className={'main-headman'}>
            <Modal active={activeCreateGroup} setActive={setActiveCreateGroup}><CreateGroup setActive={setActiveCreateGroup}/></Modal>
            <Modal active={activeCreateTeacher} setActive={setActiveCreateTeacher}><CreateTeacher setActive={setActiveCreateTeacher}/></Modal>
            <Modal active={activeCreateSubject} setActive={setActiveCreateSubject}><CreateSubject setActive={setActiveCreateSubject}/></Modal>


            <Button onClick={()=>setActiveCreateGroup(true)} variant="contained">Додати групу</Button>
            <Button onClick={()=>setActiveCreateTeacher(true)} style={{marginBottom: "10px",marginTop:"10px"}}  variant="contained">Додати вчителя</Button>
            <Button onClick={()=>setActiveCreateSubject(true)} variant="contained">Додати предмет</Button>


        </div>
    );
}

export default MainHeadman;
