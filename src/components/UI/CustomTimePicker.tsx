import React from 'react';
import {TextField, TextFieldProps} from '@mui/material';

const CustomTimePicker: React.FC<TextFieldProps> = ({defaultValue = '08:00', className, ...props}) => {
    return (
        <TextField
            id="time"
            type="time"
            defaultValue={ defaultValue }
            InputLabelProps={ {
                shrink: true,
            } }
            InputProps={ {
                sx: {fontSize: '12px'},
                className: className,
            } }
            inputProps={ {
                step: 600,
            } }
            sx={ {width: '100%'} }
            { ...props }
        />
    );
};

export default CustomTimePicker;
