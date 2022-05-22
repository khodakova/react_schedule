import React from 'react';
import {DatePicker} from '@mui/lab';
import {TextField} from '@mui/material';
import {IDateCondition} from '@src/types';

interface DateConditionProps {
    dateCondition: IDateCondition,
    
    handleChange(...args: any): void
}

const DateCondition: React.FC<DateConditionProps> = ({dateCondition, handleChange}) => {
    
    const onChange = (newValue: Date) => {
        handleChange({
            month: newValue.getMonth(),
            year: newValue.getFullYear(),
        } as IDateCondition);
    };
    
    return (
        <DatePicker
            views={ [ 'year', 'month' ] }
            label="Выберите год и месяц"
            minDate={ new Date('2012-03-01') }
            value={ new Date(dateCondition.year, dateCondition.month, 1) }
            onChange={ onChange }
            renderInput={ (params) => <TextField
                { ...params }
                helperText={ null }
                sx={ {backgroundColor: 'white'} }
            /> }
        />
    );
};

export default DateCondition;
