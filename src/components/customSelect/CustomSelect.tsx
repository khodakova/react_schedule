import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import React, {useState} from 'react';

import {ISelectMenuItem} from '@src/@types';

interface CustomSelectProps {
    menuItems: ISelectMenuItem[];
    value: any;
    label: string;
    loading: boolean;
    disabled?: boolean;
    error?: string;

    onChange(...arg: any): void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    menuItems,
    value,
    label,
    loading = false,
    disabled = false,
    error,
    onChange,
}) => {
    const handleChange = (e: SelectChangeEvent) => {
        onChange(e.target.value);
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <FormControl fullWidth disabled={disabled}>
            {loading ? (
                <CircularProgress sx={{margin: '0 auto'}} />
            ) : (
                <>
                    <InputLabel id="simple-select-label">{label}</InputLabel>
                    <Select
                        labelId="simple-select-label"
                        id="simple-select"
                        value={value}
                        label={label}
                        onChange={handleChange}
                    >
                        {menuItems.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </>
            )}
        </FormControl>
    );
};

export default CustomSelect;
