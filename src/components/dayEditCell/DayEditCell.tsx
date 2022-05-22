import React, {useEffect, useRef} from 'react';
import {Popover} from '@mui/material';
import TimeRangePicker from '@components/timeRangePicker';
import {ITimeRange} from '@src/types';
import CustomFormControlLabel from '@components/UI/CustomFormControlLabel';

interface DayEditCellProps {
    timeRange: ITimeRange | null
}

const DayEditCell: React.FC<DayEditCellProps> = ({timeRange}) => {
    const [ anchorEl, setAnchorEl ] = React.useState<HTMLDivElement | null>(null);
    
    const divRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        setAnchorEl(divRef.current);
    }, []);
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    
    return (
        <div ref={ divRef } className='day-edit'>
            <div className='day-edit__field'>
                <p>{ timeRange?.time_1 }</p>
                <p>{ timeRange?.time_2 }</p>
            </div>
            <Popover
                open={ open }
                anchorEl={ anchorEl }
                onClose={ handleClose }
                anchorOrigin={ {
                    vertical: 'bottom',
                    horizontal: 'right',
                } }
            >
                <div className='day-edit__content'>
                    <CustomFormControlLabel label='Выходной'/>
                    <div className='day-edit__time-range'>
                        <TimeRangePicker timeRange={ timeRange }/>
                    </div>
                </div>
            </Popover>
        </div>
    );
};

export default DayEditCell;
