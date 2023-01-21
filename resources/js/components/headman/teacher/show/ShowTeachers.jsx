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
        <>
            <div className={'teachers'}>
                <div className={'teachers-btn'}>
                    <Button onClick={() => setActiveCreate(true)} variant="contained">Додати вчителя</Button>
                </div>
                <div className={'table-mobile'}>
                    <table border="1" style={{textAlign: "center", width: '100%'}}>
                        <tbody>
                        <tr>
                            <th>#</th>
                            <th>Прізвище</th>
                            <th>Ім'я</th>
                            <th>По батькові</th>
                            <th>Пошта</th>
                            <th>Дія</th>
                        </tr>
                        </tbody>
                        <tbody>
                        {
                            teachers?.map((teacher) => {
                                return <IndexTeacher updateComponent={updateComponent} teacher={teacher}
                                                     key={teacher.id}/>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal active={activeCreate} setActive={setActiveCreate}><CreateTeacher
                setActive={setActiveCreate} update={updateComponent}/></Modal>

        </>
    );
}

export default ShowTeachers;
