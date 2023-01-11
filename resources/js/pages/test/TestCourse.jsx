import React, {useEffect, useState} from 'react';
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import moment from "moment-timezone";
import {User} from "../../services/User";
import './test-course.scss'
import Modal from "../../components/elements/modal/Modal";
import UpdateTest from "./update/UpdateTest";
import {useTestService} from "../../services/TestService";
import {Link, useNavigate} from "react-router-dom";

function TestCourse(props) {

    const {test, setActive} = props
    const user = new User()
    const [activeUpdate, setActiveUpdate] = useState()
    const [data, setData] = useState()
    const testService = useTestService(data, setData)
    let navigate = useNavigate();

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
        <div className={`content-test ${test?.myResult ? ' result' : ''}`}>
            <Modal active={activeUpdate} setActive={setActiveUpdate}>
                <UpdateTest setActive={setActiveUpdate}
                            id={test.id} title={test.title}
                            description={test.description}
                            count={test.count}/>
            </Modal>
            <span className={'content-test-title'}>{!test?.myResult ?
                <Link to={'/test/' + test.id} href={test?.url}>{test?.title}</Link> : test?.title}</span>
            <span className={'content-test-description'}>{test?.description}</span>
            <div className={'content-test-bottom'}>
                <span>{!test?.myResult ? 'Кількість питань: ' + test.count : 'Оцінка ' + test?.myResult}</span>

                <div className={'content-test-bottom-right'}>
                    {
                        user.isAdmin() || user.id === ownerId ? <>
                            <IconButton aria-label="delete" onClick={() => deleteCourseTest()}>
                                <DeleteIcon/>
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => setActiveUpdate(true)}>
                                <EditIcon/>
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => navigate('/test/edit/' + test?.id)}>
                                <AssignmentIcon/>
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => navigate('/test/results/' + test?.id)}>
                                <InventoryOutlinedIcon/>
                            </IconButton>
                        </> : null
                    }

                    <span
                        className={'content-test-bottom-date'}>{moment(test?.created_at + "03:00", 'YYYY-MM-DD HH:mm:ssZ').format('LL')}</span>

                </div>
            </div>
        </div>
    );
}

export default TestCourse;
