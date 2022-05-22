import {useState} from 'react';
import {getEmplDays} from '@src/helpers/date';
import {IDateCondition, ITabelRow} from '@src/types';

export const useSchedule = (dateCondition: IDateCondition) => {
    const [schedule, setSchedule] = useState([]);
    
    const emplDays = getEmplDays(dateCondition.month, dateCondition.year);
    
    
    
    
};
