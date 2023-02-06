import React from 'react';

import {
    PencilSquare,
    PlusSquare,
    XSquare
} from "react-bootstrap-icons";

function ShowDay(props) {
    const {group, day, data, addLesson, deleteLesson, root} = props
    const emptyRow = '---------'

    let dayList = []
    let lesson = []

    for (let i = 0; i < day.name.length; i++) {
        dayList.push(<><a>{day.name[i]}</a><br></br></>)
    }

    const addNewLesson = (subjectNum, dayId, formId, editData) => {
        addLesson(subjectNum, dayId, formId, group, editData)
    }

    const deleteNewLesson = (id) => {
        deleteLesson(id)
    }

    const oneLesson = (inc, data, type) => {
        return (
            <tr>
                {type === 2 ? '' : <th rowSpan={type === 3 || type === null ? 1 : 2} className="table-num">{inc}</th>}
                <th className="table-num">{data?.form?.name ?? emptyRow}</th>
                <th className="table-subject">{data?.subject?.name ?? emptyRow}</th>
                <th className="table-teacher">{data?.teacher?.shortFullName ?? emptyRow}</th>
                <th className="table-teacher">{data?.evaluation?.name ?? emptyRow}</th>
                {
                    root ? (
                        data?.id ?
                            <>
                                <th className="table-edit">
                                    <PencilSquare style={{marginRight: '5px'}} onClick={() => {
                                        addNewLesson(inc, day.id, type, {
                                            id: data?.id,
                                            teacher: data?.teacher?.id,
                                            subject: data?.subject?.id,
                                            form: type,
                                            evaluation: data?.evaluation?.id,
                                        })
                                    }}/>
                                    <XSquare onClick={() => {
                                        deleteNewLesson(data?.id)
                                    }}/>
                                </th>
                            </> :
                            <th colSpan="2"
                                onClick={() => addNewLesson(inc, day.id, type)}><PlusSquare/>
                            </th>) : null
                }
            </tr>
        )
    }

    if (data) {
        for (let i = 1; i < 9; i++) {

            if (!data[i]) {
                lesson.push(oneLesson(i, null, null))
                continue;
            }

            if (data[i].length === 2) {
                lesson.push(
                    <>
                        {oneLesson(i, data[i][0], 1)}
                        {oneLesson(i, data[i][1], 2)}
                    </>)
            } else if (data[i][0].form.id === 1) {
                lesson.push(
                    <>
                        {oneLesson(i, data[i][0], 1)}
                        {oneLesson(i, null, 2)}
                    </>)
            } else if (data[i][0].form.id === 2) {
                lesson.push(
                    <>
                        {oneLesson(i, null, 1)}
                        {oneLesson(i, data[i][0], 2)}
                    </>)
            } else if (data[i][0].form.id === 3) {
                lesson.push(
                    oneLesson(i, data[i][0], 3)
                )
            }

        }
    } else {
        for (let i = 1; i < 9; i++) {
            lesson.push(
                oneLesson(i, null, null)
            )
        }
    }

    return (
        <tbody>
        <tr>
            <th className="table-day"></th>
            <th className="table-num">№</th>
            <th className="table-num">Тип</th>
            <th className="table-subject">Предмет</th>
            <th className="table-teacher">Викладач</th>
            <th className="table-teacher">Оцінювання</th>
            {
                root ? <>
                    <th className="table-edit">Дія</th>
                </> : ''
            }

            {root && (
                <></>
            )}
        </tr>

        <td rowSpan="15">
            {dayList}
        </td>
        {lesson}
        </tbody>
    )
}

export default ShowDay;
