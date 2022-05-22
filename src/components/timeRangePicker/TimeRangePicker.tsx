import React from 'react';
import {ITimeRange} from '@src/types';
import CustomTimePicker from '@components/UI/CustomTimePicker';

interface TimeRangePickerProps {
    timeRange: ITimeRange | null
}

const TimeRangePicker: React.FC<TimeRangePickerProps> = ({timeRange}) => {
    return (
        <div className='time-range'>
            <CustomTimePicker
                defaultValue={ timeRange?.time_1 }
                sx={ {height: '20px'} }
                className='time-range__item'
            />
            <CustomTimePicker
                defaultValue={ timeRange?.time_2 }
                sx={ {height: '20px'} }
                className='time-range__item'
            />
        </div>
    );
};

export default TimeRangePicker;
