import React from 'react';
import DateCondition from '@components/dateCondition';
import CustomButton from '@components/UI/CustomButton';
import {IDateCondition} from '@src/types';
import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';

interface DashboardHeaderProps {
    dateCondition: IDateCondition,
    
    handleChange(...args: any): void,
    onClickSettings(): void,
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({dateCondition, handleChange, onClickSettings}) => {
    return (
        <div className='dashboard-header'>
            <div className='dashboard-header__left'>
                <DateCondition
                    dateCondition={ dateCondition }
                    handleChange={ handleChange }
                />
                <CustomButton startIcon={<DownloadIcon/>}>
                    Загрузить
                </CustomButton>
                <CustomButton startIcon={<SaveIcon/>}>
                    Сохранить
                </CustomButton>
            </div>
            <div className='dashboard-header__right'>
                <CustomButton
                    sx={ {minWidth: '200px'} }
                    startIcon={<SettingsIcon/>}
                    onClick={onClickSettings}
                >
                    Редактировать дни
                </CustomButton>
            </div>
        </div>
    );
};

export default DashboardHeader;
