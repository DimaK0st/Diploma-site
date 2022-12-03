import React, {useState} from 'react';

function ShowDay(props) {
    const {name, data} = props

    const [lessons, setLessons] = useState()

    console.log('name', name)
    let day = []
    let lesson = []

    for (let i = 0; i < name.length; i++) {
        day.push(<><a>{name[i]}</a><br></br></>)
    }

    // for (let i = 0; i < name; i++) {
    //     day.push(<><a>name[i]</a><br></>)
    //         }
    if (data) {

        for (let i = 1; i < 9; i++) {
            console.log(data)
            if (data[i]) {
                console.log(']]]]]]]]]]]]]]]]data[i].0', data[i])
                console.log(']]]]]]]]]]]]]]]]data[i].lenght', data[i].length)
                if (data[i].length === 2) {
                    lesson.push(
                        <>
                            <tr>
                                <th rowSpan="2" className="table-num">{i}</th>
                                <th className="table-num">{data[i][0].form.name}</th>
                                <th className="table-subject">{data[i][0].subject.name}</th>
                                <th className="table-teacher">{data[i][0].teacher.surname}</th>
                                <th className="table-edit">Редактировать</th>
                                <th className="table-delete">Удалить</th>
                            </tr>
                            <tr>
                                <th className="table-num">{data[i][1].form.name}</th>
                                <th className="table-subject">{data[i][1].subject.name}</th>
                                <th className="table-teacher">{data[i][1].teacher.surname}</th>
                                <th className="table-edit">Редактировать</th>
                                <th className="table-delete">Удалить</th>
                            </tr>
                        </>)
                } else if (data[i][0].form.id === 1) {
                    lesson.push(
                        <>
                            <tr>
                                <th rowSpan="2" className="table-num">{i}</th>
                                <th className="table-num">{data[i][0].form.name}</th>
                                <th className="table-subject">{data[i][0].subject.name}</th>
                                <th className="table-teacher">{data[i][0].teacher.surname}</th>
                                <th className="table-edit">Редактировать</th>
                                <th className="table-delete">Удалить</th>
                            </tr>
                            <tr>
                                <th className="table-num">-------------------</th>
                                <th className="table-subject">----------------</th>
                                <th className="table-teacher">-------------------</th>
                                <th className="table-edit">Редактировать</th>
                                <th className="table-delete">Удалить</th>
                            </tr>
                        </>)
                }
                else if (data[i][0].form.id === 1) {
                    lesson.push(
                        <>
                            <tr>
                                <th rowSpan="2" className="table-num">{i}</th>
                                <th className="table-num">------------------</th>
                                <th className="table-subject">---------------</th>
                                <th className="table-teacher">---------------------</th>
                                <th className="table-edit">Редактировать</th>
                                <th className="table-delete">Удалить</th>
                            </tr>
                            <tr>
                                <th className="table-num">{data[i][1].form.name}</th>
                                <th className="table-subject">{data[i][1].subject.name}</th>
                                <th className="table-teacher">{data[i][1].teacher.surname}</th>
                                <th className="table-edit">Редактировать</th>
                                <th className="table-delete">Удалить</th>
                            </tr>
                        </>)
                }
            } else {
                lesson.push(
                    <tr>
                        <th className="table-num">{i}</th>
                        <th className="table-num">--------</th>
                        <th className="table-subject">--------</th>
                        <th className="table-teacher">--------</th>
                        <th className="table-edit">--------</th>
                        <th className="table-delete">--------</th>
                    </tr>
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
                    {day}
                </td>
                {lesson}
                </tbody>
            </table>

        </div>

    )
}

export default ShowDay;
