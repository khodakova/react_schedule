import {FormControlLabel, Switch, SwitchProps, styled} from '@mui/material';
import React from 'react';

interface CustomFormControlLabelProps extends SwitchProps {
    label?: string;
}

const MaterialUISwitch = styled(Switch)(({theme}) => ({
    padding: 7,
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#aaaaae',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

const CustomFormControlLabel: React.FC<CustomFormControlLabelProps> = ({
    label,
    ...props
}) => {
    return (
        <FormControlLabel
            control={<MaterialUISwitch sx={{m: 1}} {...props} />}
            label={label}
        />
    );
};

export default CustomFormControlLabel;
