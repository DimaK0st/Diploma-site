import React, {useEffect, useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {useCourseService} from "../../../services/CourseService";
import LittleCourse from "../little-course/LittleCourse";
import './find-course.scss'

function FindCourse(props) {
    const {my}=props
    const [select, setSelect]= useState([])
    const [search, setSearch]= useState([])
    const courseService = useCourseService(search, setSearch)

    const onChange=(str)=>{
        console.log('str',str)
        courseService.searchCourse(true??'', str)
    }

    useEffect(()=>{
        courseService.searchCourse(true??'', '').then((data)=> {
            setSelect(data)
        })
    }, [])


    return (
        <div className={'find'}>
            <Autocomplete
                freeSolo
                id="teacher"
                className={'find-search'}
                name="teacher"
                options={select ?? []}
                sx={{width: 300}}
                onChange={(a, b) => {onChange(b)}}
                renderInput={(params) => <TextField {...params} label="Пошук"/>}
                getOptionLabel={(option) => option.title || ""}
            />

            <div>
                {search.length?search.map(({title, description, id, owner})=><LittleCourse title={title} description={description} id={id} user={owner} />):'sdfasdfasdf'}
            </div>
        </div>
    );
}

export default FindCourse;
