import React, {useState} from 'react';
import {Button} from "@mui/material";
import IndexGroup from "../index/IndexGroup";
import Modal from "../../../elements/modal/Modal";
import CreateGroup from "../create/CreateGroup";
import UpdateGroup from "../update/UpdateGroup";

function ShowGroups(props) {
    const {groups, updateComponent} = props
    const [activeCreate, setActiveCreate] = useState()

    return (
        <div>
            <div className={'main-headman-wrapper'}>
                <Button onClick={() => setActiveCreate(true)} variant="contained">Додати групу</Button>
                {
                    groups?.map((group) => {
                        return <IndexGroup updateComponent={updateComponent} group={group} key={group.id}/>
                    })
                }
            </div>

            <Modal active={activeCreate} setActive={setActiveCreate}><CreateGroup
                setActive={setActiveCreate}/></Modal>
        </div>
    );
}

export default ShowGroups;
