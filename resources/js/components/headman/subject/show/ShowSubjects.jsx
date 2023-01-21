import React, {useEffect, useState} from 'react';
import {Button, Table} from "@mui/material";
import Modal from "../../../elements/modal/Modal";
import './show-subjects.scss'
import CreateSubject from "../create/CreateSubject";
import IndexSubject from "../index/IndexSubject";

function ShowSubjects(props) {
    const {subjects, updateComponent} = props
    const [activeCreate, setActiveCreate] = useState()

    useEffect(() => {
        updateComponent()
    }, [activeCreate])

    return (
        <>
            <div className={'teachers'}>
                <div className={'teachers-btn'}>
                    <Button onClick={() => setActiveCreate(true)} variant="contained">Додати предмет</Button>
                </div>
                <div className={'table-mobile'}>
                    <table border="1" style={{textAlign: "center", width: '100%'}}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Предмет</th>
                            <th>Дія</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            subjects?.map((subject) => {
                                return <IndexSubject updateComponent={updateComponent} subject={subject}
                                                     key={subject.id}/>
                            })
                        }

                        </tbody>
                    </table>
                </div>
            </div>

            <Modal active={activeCreate} setActive={setActiveCreate}><CreateSubject
                setActive={setActiveCreate} update={updateComponent}/></Modal>

        </>
    );
}

export default ShowSubjects;
