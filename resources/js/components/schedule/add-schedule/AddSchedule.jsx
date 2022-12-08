import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {Autocomplete, CircularProgress, TextField} from "@mui/material";
import * as yup from "yup";
import {useScheduleService} from "../../../services/ScheduleService";


function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

function AddSchedule(props) {
    const {subjectNum, dayId, formId, group} = props

    const [data, setData] = useState([]);
    const scheduleService = useScheduleService(data, setData)

    useEffect(()=>{
        scheduleService.getAddScheduleData()
    },[])

    const onSubmit = (values) => {
        let sendObj={
            'course': group.course,
            'group-id': group.id,
            'day-id': dayId,
            'subject-num': subjectNum,
            'teacher-id': values.teacher,
            'form-id': values.form,
            'subject-id': values.subject,
            'evaluation-id': values.evaluation,
        }

        console.log('sendObj',sendObj)

        scheduleService.addSchedule(sendObj)
    }

    const validationsSchema = yup.object().shape({
        teacher: yup.string().required('Обов\'язково'),
        subject: yup.string().required('Обов\'язково'),
        form: yup.string().required('Обов\'язково'),
        evaluation: yup.string().required('Обов\'язково'),

    })

    return (
        <Formik
            validationSchema={validationsSchema}
            initialValues={{
                teacher: "",
                subject: "",
                form: "",
                evaluation: "",
            }}
            // onSubmit={async (values) => {
            //     alert(JSON.stringify(values, null, 2))
            //     // onSubmit(values)
            // }}
            onSubmit={(values)=>{onSubmit(values)}}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {formik => (

                <Form className={'s'}>
                    {console.log(formik.errors)}
                    <title className={'x'}>

                    </title>
                    <div>
                        <span>subjectNum: {subjectNum}</span>
                        <span>dayId: {dayId}</span>
                        <span>formId: {formId}</span>
                        <span>group.name: {group.name}</span>
                    </div>

                    <Autocomplete
                        disablePortal
                        id="teacher"
                        name="teacher"
                        options={data?.teachers??[]}
                        sx={{width: 300}}
                        onChange={(a, b) => {
                            formik.setFieldValue('teacher', b?.id)
                            formId? formik.setFieldValue('form', formId):null}}
                        // onChange={(a, b) => console.log(b.id)}
                        renderInput={(params) => <TextField {...params} error={formik.errors['teacher']} label="Викладач"/>}
                        getOptionLabel={(option) => option.shortFullName || ""}

                    />

                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        name="subject"
                        options={data?.subjects??[]}
                        sx={{width: 300}}
                        onChange={(a, b) => formik.setFieldValue('subject', b?.id??'')}
                        renderInput={(params) => <TextField {...params} error={formik.errors['subject']} label="Предмет"/>}
                        getOptionLabel={(option) => option.name || ""}
                    />
                    {formId?
                        <></>
                        :
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        name="form"
                        options={data.forms??[]}
                        sx={{width: 300}}
                        onChange={(a, b) => formik.setFieldValue('form', b?.id)}
                        renderInput={(params) => <TextField {...params} error={formik.errors['form']} label="Тип"/>}
                        getOptionLabel={(option) => option.name || ""}
                    />}

                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        name="evaluation"
                        options={data.evaluations??[]}
                        sx={{width: 300}}
                        onChange={(a, b) => formik.setFieldValue('evaluation', b?.id)}
                        renderInput={(params) => <TextField {...params} error={formik.errors['evaluation']} label="Оцінювання"/>}
                        getOptionLabel={(option) => option.name || ""}
                    />
                    <button type={"submit"}>Додати</button>
                </Form>
            )}
        </Formik>
    );
}

export default AddSchedule;
