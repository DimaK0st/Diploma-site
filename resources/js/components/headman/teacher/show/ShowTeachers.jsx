import React, {useState} from 'react';
import {Button, Table} from "@mui/material";
import Modal from "../../../elements/modal/Modal";
import IndexTeacher from "../index/IndexTeacher";
import CreateTeacher from "../create/CreateTeacher";
import './show-teachers.scss'

function ShowTeachers(props) {
    const {teachers, updateComponent} = props
    const [activeCreate, setActiveCreate] = useState()

    return (
        <div>
            <div className={'teachers'}>
                <div className={'teachers-btn'}>
                    <Button onClick={() => setActiveCreate(true)} variant="contained">Додати вчителя</Button>
                </div>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Прізвище</th>
                        <th>Ім'я</th>
                        <th>По батькові</th>
                        <th>Пошта</th>
                        <th>Дія</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        teachers?.map((teacher) => {
                            return <IndexTeacher updateComponent={updateComponent} teacher={teacher} key={teacher.id}/>
                        })
                    }
                    </tbody>
                </Table>

            </div>

            <Modal active={activeCreate} setActive={setActiveCreate}><CreateTeacher
                setActive={setActiveCreate}/></Modal>

        </div>
    );
}

export default ShowTeachers;
