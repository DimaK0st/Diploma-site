import React from 'react';
import {IconButton, Paper, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Variant(props) {

    const {item, formik, setSendData, sendData} = props

const deleteVariant = ()=>{
    setSendData({
        ...sendData,
        variants: [...sendData.variants.filter((i) => i.id !== item.id)]
    })
}

    return (
        <Paper
            elevation={0}
            component="form"
            sx={{
                bgcolor: 'transparent',display: 'flex', alignItems: 'center', height:'60px', marginBottom: '10px' }}
        >
        <TextField
            fullWidth
            id="outlined-textarea"
            key={item.id}
            label= "Назва питання"
            value={item?.text}
            name={'title'}
            onChange={(event) => {
                formik.setFieldValue('variants', event.target.value)
                // formik.setFieldValue('id', value.id)
                setSendData({
                    ...sendData,
                    variants: [...sendData.variants.map((i) => {
                        if (i.id !== item.id){
                            return i
                        }else {
                            return {
                                id: item.id,
                                'text': event.target.value
                            }
                        }
                    })]
                })
            }}
            placeholder="Placeholder"
            error={formik.errors['title']}
            multiline
        />
            <IconButton color="error" sx={{ p: '10px' }} aria-label="directions" onClick={()=>deleteVariant()}>
                <DeleteIcon/>
            </IconButton>
        </Paper>
    );
}

export default Variant;
