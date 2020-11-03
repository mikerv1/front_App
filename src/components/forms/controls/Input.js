import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {
    const { name, type, label, value, error=null, onChange } = props;
    return (
        <TextField
            type={type}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={label}
            name={name}
            autoFocus
            value={value}
            onChange={onChange}
            {...(error && {error:true, helperText:error})}
            


            // variant="outlined"
            // label={label}
            // name={name}
            // value={value}
            // onChange={onChange}
            // {...(error && {error:true,helperText:error})}
        />
    )
}