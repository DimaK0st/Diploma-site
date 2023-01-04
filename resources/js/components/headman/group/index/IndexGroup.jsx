import React, {useState} from 'react';
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "../../../elements/modal/Modal";
import UpdateGroup from "../update/UpdateGroup";
import {useHeadmanService} from "../../../../services/HeadmanService";

function IndexGroup(props) {
    const {group, updateComponent} = props

    const [activeUpdate, setActiveUpdate] = useState()

    const [data, setData] = useState()
    const headmanService = useHeadmanService(data, setData)

    const deleteGroup = ()=>{
        headmanService.deleteGroup({id: group.id}).then(updateComponent)
    }

    return (
        <div>
            <span>{group?.name}</span>
            <IconButton aria-label="delete" onClick={() => setActiveUpdate(true)}>
                <EditIcon/>
            </IconButton>
            <IconButton aria-label="delete" onClick={deleteGroup}>
                <DeleteIcon/>
            </IconButton>

            <Modal active={activeUpdate} setActive={setActiveUpdate}><UpdateGroup
                editData={{id: group.id, name: group.name}}
                setActive={setActiveUpdate}
                updateComponent={updateComponent}/></Modal>
        </div>
    );
}

export default IndexGroup;
