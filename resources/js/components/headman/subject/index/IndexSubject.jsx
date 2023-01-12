import React, {useState} from 'react';
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "../../../elements/modal/Modal";
import {useHeadmanService} from "../../../../services/HeadmanService";
import UpdateSubject from "../update/UpdateSubject";

function IndexSubject(props) {
    const {subject, updateComponent} = props

    const [activeUpdate, setActiveUpdate] = useState()

    const [data, setData] = useState()
    const headmanService = useHeadmanService(data, setData)

    const deleteSubject = () => {
        headmanService.deleteSubject({id: subject.id}).then(updateComponent)
    }

    return (
        <tr>
            <td>{subject?.id}</td>
            <td>{subject?.name}</td>
            <td>
                <IconButton aria-label="delete" onClick={() => setActiveUpdate(true)}>
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label="delete" onClick={deleteSubject}>
                    <DeleteIcon/>
                </IconButton>
                <Modal active={activeUpdate} setActive={setActiveUpdate}><UpdateSubject
                    editData={{
                        id: subject.id,
                        name: subject.name,
                    }}
                    setActive={setActiveUpdate}
                    updateComponent={updateComponent}/></Modal>
            </td>
        </tr>
    );
}

export default IndexSubject;
