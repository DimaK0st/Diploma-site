import React, {useEffect, useState} from 'react';
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import AssignmentIcon from '@mui/icons-material/Assignment';
import moment from "moment-timezone";
import {User} from "../../services/User";
import './test-course.scss'
import Modal from "../../components/elements/modal/Modal";
import UpdateTest from "./update/UpdateTest";
import {useTestService} from "../../services/TestService";

function TestCourse(props) {

    const {test, setActive} = props
    const user = new User()
    const [activeUpdate, setActiveUpdate] = useState()
    const [data, setData] = useState()
    const testService = useTestService(data, setData)

    useEffect(() => {
        if (!activeUpdate)
            setActive(true)
    }, [activeUpdate])


    const deleteCourseTest = () => {
        testService.deleteTest({id: test.id}).then(() => {
            setActive(true)
        })
    }


    return (
        <div className={'content-test'}>
            <Modal active={activeUpdate} setActive={setActiveUpdate}><UpdateTest setActive={setActiveUpdate}
                                                                                 id={test.id} title={test.title}
                                                                                 description={test.description}
                                                                                 count={test.count}/></Modal>

            <span className={'content-test-title'}>{test?.url !== '' ? <a href={test?.url}>{test?.title}</a> :
                <span>{test?.title}</span>}</span>
            <span className={'content-test-description'}>{test?.description}</span>
            <div className={'content-test-bottom'}>
                <span>Кількість питань: {test.count}</span>

                <div className={'content-test-bottom-right'}>
                    {
                        user.isAdmin() || user.id === ownerId ? <>
                            <IconButton aria-label="delete" onClick={() => deleteCourseTest()}>
                                <DeleteIcon/>
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => setActiveUpdate(true)}>
                                <EditIcon/>
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => setActiveUpdate(true)}>
                                <AssignmentIcon/>
                            </IconButton>
                        </> : null
                    }

                    <span
                        className={'content-test-bottom-date'}>{moment(test?.created_at + "03:00", 'YYYY-MM-DD HH:mm:ssZ').lang("ru").format('LL')}</span>

                </div>
            </div>
        </div>
    );
}

export default TestCourse;
