import React, {useCallback, useEffect, useState} from 'react';
import './main-headman.scss'
import {useHeadmanService} from "../../services/HeadmanService";
import ShowGroups from "./group/show/ShowGroups";
import ShowTeachers from "./teacher/show/ShowTeachers";
import ShowSubjects from "./subject/show/ShowSubjects";

function MainHeadman() {

    // const [data, actions] = useHeadmanService()
    const {data, getAllData} = useHeadmanService()

    const [update, setUpdate] = useState(null)

    const updateComponent = useCallback(()=> {
        setUpdate((update) => !update)
    }, [])

    useEffect(() => {
        getAllData();
    }, [update])

    return (
        <div className={'main-headman'}>
            <ShowGroups groups={data?.groups} updateComponent={updateComponent}/>
            <ShowTeachers teachers={data?.teachers} updateComponent={updateComponent}/>
            <ShowSubjects subjects={data?.subjects} updateComponent={updateComponent}/>
        </div>
    );
}

export default MainHeadman;
