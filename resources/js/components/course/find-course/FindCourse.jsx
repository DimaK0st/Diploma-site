import React, {useEffect, useState} from 'react';
import {Autocomplete, Button, TextField} from "@mui/material";
import {useCourseService} from "../../../services/CourseService";
import LittleCourse from "../little-course/LittleCourse";
import './find-course.scss'
import CreateCourse from "../create/CreateCourse";
import Modal from "../../elements/modal/Modal";

function FindCourse(props) {
    const {my} = props
    const [select, setSelect] = useState([])
    const [search, setSearch] = useState({
        loaded: false
    })
    const [active, setActive] = useState(false)
    const courseService = useCourseService(search, setSearch)

    const onChange = (str) => {
        console.log('str', str)
        courseService.searchCourse(my ? 1 : 0, str)
    }

    useEffect(() => {
        courseService.searchCourse(my ? 1 : 0, '').then((data) => {
            setSelect(data)
        })
    }, [])

    useEffect(() => {
        if (search.loaded && !active) {
            courseService.searchCourse(my ? 1 : 0, '').then((data) => {
                setSelect(data)
            })
        }
    }, [active])

    return (
        <div className={'find'}>
            <Modal active={active} setActive={setActive}> <CreateCourse setActive={setActive}/> </Modal>
            <Autocomplete
                freeSolo
                id="teacher"
                className={'find-search'}
                name="teacher"
                options={select ?? []}
                sx={{width: 300}}
                onChange={(a, b) => {
                    onChange(b?.title??b)
                }}
                renderInput={(params) => <TextField {...params}
                                                    label={"Пошук серед " + `${my ? 'ваших' : 'всіх'}` + " курсів"}/>}
                getOptionLabel={(option) => option.title || ""}
            />

            <Button onClick={() => setActive(true)}>Створити курс</Button>

            <div>
                {search?.data?.length
                    ? search?.data
                        ?.map(({title, description, id, owner}) =>
                            <LittleCourse title={title}
                                          description={description}
                                          id={id}
                                          user={owner}/>)
                    : 'sdfasdfasdf'}
            </div>
        </div>
    );
}

export default FindCourse;
