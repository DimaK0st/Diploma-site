import React from 'react';
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function IndexGroup(props) {

    const {group,updateComponent}=props
    return (
        <div>
            <span>{group?.name}</span>
            <IconButton aria-label="delete" onClick={() => setActiveUpdate(true)}>
                <EditIcon/>
            </IconButton>
            <IconButton aria-label="delete" onClick={() => updateComponent()}>
                <DeleteIcon/>
            </IconButton>
        </div>
    );
}

export default IndexGroup;
