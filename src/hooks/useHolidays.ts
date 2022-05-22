import {useState} from 'react';
import {IHoliday} from '@src/types';
import {getHolidaysInMonth} from '@src/helpers/holidays';

export const useHolidays = (month: number) => {
    const [holidays, setHolidays] = useState<Array<IHoliday>>(getHolidaysInMonth(month));
    
    const addHoliday = (newHoliday: IHoliday) => {
        setHolidays([...holidays].concat(newHoliday))
    };
    
    return {holidays, addHoliday};
};
