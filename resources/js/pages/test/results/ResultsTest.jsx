import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useTestService} from "../../../services/TestService";
import {Table} from "@mui/material";
import moment from "moment-timezone";
import './results-test.scss'

function ResultsTest() {
    const [data, setData] = useState({
        loaded: false
    })
    const {testId} = useParams()
    const testService = useTestService(data, setData)

    useEffect(() => {
        testService.getResultByTestId(testId)
    }, [testId])

    return (
        <div className={'result'}>
            <span className={'result-title'}>Тест: {data?.title}</span>
            <div className={'result-table'}>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Прізвище</th>
                        <th>Ім'я</th>
                        <th>По батькові</th>
                        <th>Група</th>
                        <th>Оцінка</th>
                        <th>Час</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data?.results?.map((result, index) => {
                            return (<ItemTable
                                index={index + 1}
                                lastname={result.user.lastname}
                                firstname={result.user.firstname}
                                patronymic={result.user.patronymic}
                                groups={result.user.groups.name}
                                result1={result.result}
                                result2={result.formattedResult}
                                date={result.created_at}
                            />)
                        })
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

const ItemTable = (props) => {
    const {index, lastname, firstname, patronymic, groups, result1, result2, date} = props

    return (<tr>
        <td>{index}</td>
        <td>{lastname}</td>
        <td>{firstname}</td>
        <td>{patronymic}</td>
        <td>{groups}</td>
        <td>{result2 + '/' + result1 + '%'}</td>
        <td>{moment(date + "03:00", 'YYYY-MM-DD HH:mm:ssZ').format('LLL')}</td>
    </tr>)
}

export default ResultsTest;
