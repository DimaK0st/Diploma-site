import React from 'react';
import {FormControlLabel, IconButton, Paper, Radio, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Variant(props) {
    const {item, formik, setSendData, sendData} = props

    const deleteVariant = () => {
        setSendData({
            ...sendData,
            variants: [...sendData.variants.filter((i) => i.id !== item.id)]
        })
    }

    const variantHandler = (event) => {
        return {
            variants: [...sendData.variants.map((i) => {
                if (i.id !== item.id) {
                    return i
                } else {
                    return {
                        id: item.id,
                        'text': event.target.value,
                        correct: item.correct
                    }
                }
            })]
        }
    }
    const checkBoxHandler = (id) => {
        setSendData((sendData) => ({
            ...sendData,
            variants: [...sendData.variants.map((item) => {
                return {
                    id: item.id,
                    'text': item.text,
                    correct: id === item.id,
                }
            })]
        }))
    }

    return (
        <Paper
            elevation={0}
            component="form"
            sx={{
                bgcolor: 'transparent', display: 'flex', alignItems: 'center', height: '60px', marginBottom: '10px'
            }}
        >
            <TextField
                required
                fullWidth
                id="outlined-textarea"
                key={item.id}
                label="Назва питання"
                value={item?.text}
                name={'title'}
                onChange={(event) => {
                    let varian = variantHandler(event)

                    setSendData((sendData) => ({
                        ...sendData,
                        ...varian
                    }))
                    formik.setFieldValue('variants', [...varian.variants])
                }}
                placeholder="Placeholder"
                error={formik.errors['title']}
                multiline
            />
            <IconButton color="error" sx={{p: '10px'}} aria-label="directions" onClick={() => deleteVariant()}>
                <DeleteIcon/>
            </IconButton>
            <FormControlLabel value="" onChange={() => checkBoxHandler(item.id)} checked={item.correct}
                              control={<Radio/>} label=""/>
        </Paper>
    );
}

export default Variant;
