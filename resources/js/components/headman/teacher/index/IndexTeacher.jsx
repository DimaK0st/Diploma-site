import React, {useState} from 'react';
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "../../../elements/modal/Modal";
import {useHeadmanService} from "../../../../services/HeadmanService";
import UpdateTeacher from "../update/UpdateTeacher";

function IndexTeacher(props) {
    const {teacher, updateComponent} = props

    const [activeUpdate, setActiveUpdate] = useState()

    const [data, setData] = useState()
    const headmanService = useHeadmanService(data, setData)

    const deleteTeacher = () => {
        headmanService.deleteTeacher({id: teacher.id}).then(updateComponent)
    }

    return (
        <tr>
            <td>{teacher?.id}</td>
            <td>{teacher?.surname}</td>
            <td>{teacher?.name}</td>
            <td>{teacher?.patronymic}</td>
            <td>{teacher?.email ?? ''}</td>
            <td>
                <IconButton aria-label="delete" onClick={() => setActiveUpdate(true)}>
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label="delete" onClick={deleteTeacher}>
                    <DeleteIcon/>
                </IconButton>
                <Modal active={activeUpdate} setActive={setActiveUpdate}><UpdateTeacher
                    editData={{
                        id: teacher.id,
                        surname: teacher.surname,
                        name: teacher.name,
                        patronymic: teacher.patronymic,
                        email: teacher.email !== '' ? teacher.email : ' ',
                    }}
                    setActive={setActiveUpdate}
                    updateComponent={updateComponent}/></Modal>
            </td>
        </tr>
    );
}

export default IndexTeacher;
