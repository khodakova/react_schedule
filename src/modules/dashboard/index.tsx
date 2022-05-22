import React, {useState} from 'react';
import ScheduleGrid from '@src/modules/dashboard/components/scheduleGrid/ScheduleGrid';
import DashboardHeader from '@src/modules/dashboard/components/dashboardHeader';
import {IDateCondition} from '@src/types';
import CustomDrawer from '@components/customDrawer/CustomDrawer';
import DaysSettings from '@src/modules/common/components/daysSettings/DaysSettings';

const Dashboard: React.FC = () => {
    const [ date, setDate ] = useState<IDateCondition>({
        month: (new Date()).getMonth(),
        year: (new Date()).getFullYear(),
    });
    const [ openSettings, setOpenSettings ] = useState(false);
    
    const handleOpenSettings = () => {
        setOpenSettings(true);
    };
    
    const handleCloseSettings = () => {
        setOpenSettings(false);
    };
    
    return (
        <div className="dashboard">
            <DashboardHeader
                dateCondition={ date }
                handleChange={ setDate }
                onClickSettings={ handleOpenSettings }
            />
            <ScheduleGrid dateCondition={ date }/>
            <CustomDrawer open={ openSettings } onClose={ handleCloseSettings }>
                <DaysSettings month={date.month}/>
            </CustomDrawer>
        </div>
    );
};

export default Dashboard;
