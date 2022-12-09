import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {Autocomplete, CircularProgress, TextField} from "@mui/material";
import * as yup from "yup";
import {useScheduleService} from "../../../services/ScheduleService";


function ScheduleManager(props) {
    const {subjectNum, dayId, formId, group, setActive, editData} = props

    const [data, setData] = useState([]);
    const scheduleService = useScheduleService(data, setData)
    console.log('aaaaaasafasdfasdasdafsdf', editData)
    const [defaultData, setDefaultData] = useState({
        teacher: "",
        subject: "",
        evaluation: "",
    })

    useEffect(() => {
        scheduleService.getAddScheduleData().then((data) => {
            setEditData(data)
        })
    }, [])

    useEffect(()=>{
        if (editData){
            setEditData(data)
        }
    },[editData])

    const setEditData = (data)=>{
        setDefaultData(
            {
                teacher: data?.teachers?.find((option) => option.id === editData.teacher),
                subject: data?.subjects?.find((option) => option.id === editData.subject),
                evaluation: data?.evaluations?.find((option) => option.id === editData.evaluation),
            }
        )
    }

    useEffect(() => {
        console.log('asdfasfdafasfdasdfasfasdfadfdfg', defaultData)
    }, [defaultData])

    const onSubmit = (values) => {
        let sendObj = {
            'course': group.course,
            'group-id': group.id,
            'day-id': dayId,
            'subject-num': subjectNum,
            'teacher-id': values.teacher,
            'form-id': values.form,
            'subject-id': values.subject,
            'evaluation-id': values.evaluation,
        }

        if (editData) {
            sendObj.id=editData.id
            console.log('hyuhuyuhuhyu', sendObj)
            scheduleService.editSchedule(sendObj).then(setActive(false))
        } else {
            scheduleService.addSchedule(sendObj).then(setActive(false))
        }

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
            key={subjectNum + dayId + formId}
            initialValues={editData ? editData : {
                teacher: "",
                subject: "",
                form: "",
                evaluation: "",
            }}
            // onSubmit={async (values) => {
            //     alert(JSON.stringify(values, null, 2))
            //     // onSubmit(values)
            // }}
            onSubmit={(values) => {
                onSubmit(values)
            }}
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
                        value={defaultData.teacher}
                        disablePortal
                        id="teacher"
                        name="teacher"
                        options={data?.teachers ?? []}
                        sx={{width: 300}}
                        onChange={(a, b) => {
                            formik.setFieldValue('teacher', b?.id)
                            setDefaultData((value) => ({...value, 'teacher': b}))
                            formId ? formik.setFieldValue('form', formId) : null
                        }}
                        // onChange={(a, b) => console.log(b.id)}
                        renderInput={(params) => <TextField {...params} error={formik.errors['teacher']}
                                                            label="Викладач"/>}
                        getOptionLabel={(option) => option.shortFullName || ""}

                    />

                    <Autocomplete
                        disablePortal
                        value={defaultData.subject}
                        id="combo-box-demo"
                        name="subject"
                        options={data?.subjects ?? []}
                        sx={{width: 300}}
                        onChange={(a, b) => {
                            formik.setFieldValue('subject', b?.id ?? '')
                            setDefaultData((value) => ({...value, 'subject': b}))
                        }}
                        renderInput={(params) => <TextField {...params} error={formik.errors['subject']}
                                                            label="Предмет"/>}
                        getOptionLabel={(option) => option.name || ""}
                    />
                    {formId ?
                        <></>
                        :
                        <Autocomplete
                            disablePortal
                            value={defaultData.form}
                            id="combo-box-demo"
                            name="form"
                            options={data.forms ?? []}
                            sx={{width: 300}}
                            onChange={(a, b) => {
                                formik.setFieldValue('form', b?.id)
                                setDefaultData((value) => ({...value, 'form': b}))
                            }}
                            renderInput={(params) => <TextField {...params} error={formik.errors['form']} label="Тип"/>}
                            getOptionLabel={(option) => option.name || ""}
                        />}

                    <Autocomplete
                        disablePortal
                        value={defaultData.evaluation}
                        id="combo-box-demo"
                        name="evaluation"
                        options={data.evaluations ?? []}
                        sx={{width: 300}}
                        onChange={(a, b) => {
                            formik.setFieldValue('evaluation', b?.id)
                            setDefaultData((value) => ({...value, 'evaluation': b}))
                        }}
                        renderInput={(params) => <TextField {...params} error={formik.errors['evaluation']}
                                                            label="Оцінювання"/>}
                        getOptionLabel={(option) => option.name || ""}
                    />
                    <button type={"submit"}>Додати</button>
                </Form>
            )}
        </Formik>
    );
}

export default ScheduleManager;
