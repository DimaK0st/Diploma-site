import React, {useEffect, useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {useCourseService} from "../../../services/CourseService";

function FindCourse(props) {

    const [select, setSelect]= useState([])
    const [search, setSearch]= useState([])
    const courseService = useCourseService(search, setSearch)

    const onChange=(str)=>{
        console.log('str',str)
        courseService.searchCourse(str)
    }

    useEffect(()=>{
        courseService.searchCourse('').then((data)=> {
            setSelect(data)
        })
    }, [])


    return (
        <div>
            <Autocomplete
                disablePortal
                id="teacher"
                className={'auto-select'}
                name="teacher"
                options={select ?? []}
                sx={{width: 300}}
                onChange={(a, b) => {onChange(b)}}
                renderInput={(params) => <TextField {...params} label="Пошук"/>}
                getOptionLabel={(option) => option.title || ""}
            />
        </div>
    );
}

export default FindCourse;
