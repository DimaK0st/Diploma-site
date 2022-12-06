import React, {useState} from 'react';

function ShowDay(props) {
    const {day, data} = props
    const emptyRow = '---------'

    let dayList = []
    let lesson = []

    for (let i = 0; i < day.name.length; i++) {
        dayList.push(<><a>{day.name[i]}</a><br></br></>)
    }


    const oneLesson = (inc, data, type) => {

        return (
            <tr>
                {type === 2 ? '' : <th rowSpan={type === 3 || type === null ? 1 : 2} className="table-num">{inc}</th>}
                <th className="table-num">{data?.form?.name ?? emptyRow}</th>
                <th className="table-subject">{data?.subject?.name?? emptyRow}</th>
                <th className="table-teacher">{data?.teacher?.surname??emptyRow}</th>
                {
                    data?.id ?
                        <>
                            <th className="table-edit">{data.id}</th>
                            <th className="table-delete">{data.id}</th>
                        </> :
                        <th colSpan="2">{emptyRow}</th>
                }
            </tr>
        )
    }

    if (data) {
        for (let i = 1; i < 9; i++) {
            if (data[i]) {
                if (data[i].length === 2) {
                    lesson.push(
                        <>
                            {oneLesson(i,data[i][0],1)}
                            {oneLesson(i, data[i][1],2)}
                        </>)
                } else if (data[i][0].form.id === 1) {
                    lesson.push(
                        <>
                            {oneLesson(i,data[i][0],1)}
                            {oneLesson(i, null,2)}
                        </>)
                } else if (data[i][0].form.id === 2) {
                    lesson.push(
                        <>
                            {oneLesson(i,null,1)}
                            {oneLesson(i, data[i][0],2)}
                        </>)
                }
            } else {
                lesson.push(
                    oneLesson(i, null, null)
                )
            }
        }
    }

    return (
        <div className={'day'}>

            <table border="1" style={{textAlign: "center", width: '100%'}}>
                <tbody>
                <tr>
                    <th className="table-day"></th>
                    <th className="table-num">№</th>
                    <th className="table-num">Тип</th>
                    <th className="table-subject">Предмет</th>
                    <th className="table-teacher">Преподаватель</th>
                    <th className="table-edit">Редактировать</th>
                    <th className="table-delete">Удалить</th>
                </tr>

                <td rowSpan="15">
                    {dayList}
                </td>
                {lesson}
                </tbody>
            </table>

        </div>

    )
}

export default ShowDay;
