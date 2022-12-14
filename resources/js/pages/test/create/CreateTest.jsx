import React, {useState} from 'react';
import {useTestService} from "../../../services/TestService";

function CreateTest(props) {
    const {course, user} = props
    const [data,setData] = useState()

    const onSubmit = ()=>{
        useTestService.createTest(data,setData)
    }

    return (
        <div>

            

        </div>
    );
}

export default CreateTest;
