import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {Autocomplete, Button, CircularProgress, TextField} from "@mui/material";
import * as yup from "yup";
import {useScheduleService} from "../../../services/ScheduleService";
import './schedule-manager.scss'


function ScheduleManager(props) {
    const {subjectNum, dayId, formId, group, setActive, editData} = props

    const [data, setData] = useState([]);
    const scheduleService = useScheduleService(data, setData)
    const [defaultData, setDefaultData] = useState({
        teacher: "",
        subject: "",
        evaluation: "",
    })

    useEffect(() => {
        scheduleService.getAddScheduleData().then((data) => {
            setEditData(data, editData)
        })
    }, [])

    useEffect(() => {
        if (editData) {
            setEditData(data, editData)
        } else if (editData === undefined) {
            setEditData(data, editData)
        }
    }, [editData, subjectNum])

    const setEditData = (data, editData) => {
        setDefaultData(
            {
                teacher: data?.teachers?.find((option) => option.id === editData?.teacher) ?? '',
                subject: data?.subjects?.find((option) => option.id === editData?.subject) ?? '',
                evaluation: data?.evaluations?.find((option) => option.id === editData?.evaluation) ?? '',
            }
        )
    }

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
            sendObj.id = editData.id
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
            key={'' + subjectNum + dayId + formId}
            initialValues={editData ? editData : {
                teacher: "",
                subject: "",
                form: "",
                evaluation: "",
            }}
            onSubmit={(values) => {
                onSubmit(values)
            }}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {formik => (
                <Form className={'schedule-manager'}>
                    <span className={'schedule-manager-title'}>
                        {editData ? 'Редагування' : 'Додавання'}
                    </span>

                    <Autocomplete
                        value={defaultData.teacher}
                        defaultValue={defaultData.teacher}
                        disablePortal
                        id="teacher"
                        className={'auto-select'}
                        name="teacher"
                        options={data?.teachers ?? []}
                        sx={{width: 300}}
                        onChange={(a, b) => {
                            formik.setFieldValue('teacher', b?.id)
                            setDefaultData((value) => ({...value, 'teacher': b}))
                            formId ? formik.setFieldValue('form', formId) : null
                        }}
                        renderInput={(params) => <TextField {...params} error={formik.errors['teacher']}
                                                            label="Викладач"/>}
                        getOptionLabel={(option) => option.shortFullName || ""}
                    />

                    <Autocomplete
                        disablePortal
                        value={defaultData.subject}
                        id="combo-box-demo"
                        className={'auto-select'}
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
                            className={'auto-select'}
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
                        className={'auto-select'}
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
                    <div className={'schedule-manager-submit'}>
                        <Button className={'schedule-manager-submit-btn'} type={"submit"}
                                variant="contained">Додати</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default ScheduleManager;
