import {DatePicker, LocalizationProvider} from '@mui/lab';
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import {TextField} from '@mui/material';
import cn from 'classnames';
import {format, parse} from 'date-fns';
import {ru} from 'date-fns/locale';
import React, {useEffect, useState} from 'react';

import {maskMap} from '@src/helpers/dateHelpers';

import {CustomDatePickerProps} from '@components/customDatePicker/customDatePickerProps';
import CustomFormControlLabel from '@components/UI/CustomFormControlLabel';

/**
 * Кастомное поле выбора даты с возможностью указать его пустым
 * @param label - название поля с датой
 * @param value - значение в поле в виде строки dd.MM.yyyy
 * @param onChange - функция изменения значения
 * @param canBeNull - флаг, указывающий, может ли поле быть пустым
 * @param nullLabel - название для чекбокса в случае возможности указания пустого значения для даты
 * @param field - название поля в объекте
 * @param name - название для формика для валидации значения (необходимо для указания)
 * @param classNameTextField - имя класса для текстового поля
 * @param props - остальные пропсы
 * @constructor
 */
const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    label,
    value,
    onChange,
    canBeNull,
    nullLabel,
    field,
    name,
    classNameTextField,
    ...props
}) => {
    // значение чекбокса
    const [control, setControl] = useState(value ? false : true);

    // реакция на изменение чекбокса в true
    useEffect(() => {
        if (control) {
            onChange(field, '');
        }
    }, [control]);

    /**
     * Изменение значения чекбокса
     */
    const handleControl = () => {
        const val = control;
        setControl(!val);
    };

    /**
     * Изменение поля с датой
     * @param newValue - новое значение
     */
    const handleChange = (newValue: any) => {
        onChange(field, format(newValue, 'dd.MM.yyyy'));
    };

    return (
        <div className={cn('date-picker', {'date-picker_row': canBeNull})}>
            <LocalizationProvider dateAdapter={DateFnsAdapter} locale={ru}>
                <DatePicker
                    {...props}
                    label={label}
                    value={
                        value
                            ? parse(value.toString(), 'dd.MM.yyyy', new Date())
                            : null
                    }
                    mask={maskMap['ru']}
                    onChange={handleChange}
                    inputFormat={'dd.MM.yyyy'}
                    renderInput={(params: any) => (
                        <TextField
                            variant="outlined"
                            {...params}
                            sx={{width: '100%'}}
                            disabled={control}
                            name={name}
                            className={classNameTextField}
                        />
                    )}
                />
            </LocalizationProvider>
            {canBeNull && (
                <CustomFormControlLabel
                    label={nullLabel}
                    checked={control}
                    onChange={handleControl}
                />
            )}
        </div>
    );
};

export default CustomDatePicker;
