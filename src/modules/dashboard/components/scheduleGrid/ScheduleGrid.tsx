import React, {useEffect, useState} from 'react';
import CustomDatagrid from '@components/customDatagrid/CustomDatagrid';
import {getHeader, getRows} from '@src/helpers/date';
import {IDateCondition, ITabelRow} from '@src/types';
import {useHolidaysContext} from '@src/contexts/HolidaysContext';

interface TabelGridProps {
    dateCondition: IDateCondition
}

const ScheduleGrid: React.FC<TabelGridProps> = ({dateCondition}) => {
    const [header, setHeader] = useState(getHeader(dateCondition));
    const {holidays} = useHolidaysContext();
    // const header = getHeader(dateCondition);
    const [schedule, setSchedule] = useState<Array<ITabelRow>>();
    
    useEffect(() => {
        const newRows = getRows(dateCondition);
        setSchedule(newRows);
    }, [dateCondition.month, holidays]);
    
    useEffect(() => {
        // console.log(getHeader(dateCondition));
        setHeader(getHeader(dateCondition));
    }, [holidays]);
    
    return (
        <CustomDatagrid
            header={ header }
            rows={ schedule }
            className="tabel__grid"
            rowClassName="tabel__grid__row"
            cellClassName="tabel__grid__cell"
            needToolbar
            exportTitle={ 'Табель' }
            isLoading={ false }
        />
    );
};

export default ScheduleGrid;
