import React, {useState} from 'react';
import CustomListItem from '@components/customListItem/CustomListItem';
import {Box, TextField} from '@mui/material';
import CustomButton from '@components/UI/CustomButton';
import AddIcon from '@mui/icons-material/Add';
import CustomDatePicker from '@components/customDatePicker/CustomDatePicker';
import {useHolidaysContext} from '@src/contexts/HolidaysContext';
import {addToCustomHolidays} from '@src/helpers/holidays';

interface DaysSettingsProps {
    month: number
}

const DaysSettings: React.FC<DaysSettingsProps> = ({month}) => {
    const {holidays, addHoliday} = useHolidaysContext();
    const [ addVisible, setAddVisible ] = useState(false);
    const [ newHoliday, setNewHoliday ] = useState<Date | null>(new Date());
    
    const handleClickAdd = () => {
        setAddVisible(true);
    };
    
    const handleChangeHoliday = (newDate: Date | null) => {
        setNewHoliday(newDate);
    };
    
    const handleAdd = () => {
        if ( newHoliday ) {
            addHoliday({month: newHoliday.getMonth(), day: newHoliday.getDate(), comment: 'Новый праздник'});
            addToCustomHolidays({month: newHoliday.getMonth(), day: newHoliday.getDate(), comment: 'Новый праздник'});
        }
        setAddVisible(false);
    };
    
    return (
        <Box sx={ {minWidth: '40rem', padding: '3rem'} }>
            { holidays.length > 0
                ? <>
                    <h3>
                        В выбранном месяце найдены следующие праздничные дни:
                    </h3>
                    <Box sx={ {display: 'flex', flexDirection: 'column', paddingTop: '1rem'} }>
                        {
                            holidays.map(item =>
                                <CustomListItem key={ item.day }>
                                    { item.day } - { item.comment }
                                </CustomListItem>,
                            )
                        }
                    </Box>
                </>
                : (
                    <div>
                        В выбранном месяце нет праздничных дней
                    </div>
                )
            }
            <CustomButton sx={ {mt: '2rem'} } startIcon={ <AddIcon/> } onClick={ handleClickAdd }>
                Добавить выходной день
            </CustomButton>
            {
                addVisible &&
                <Box sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '200px',
                    mt: '3vh',
                    justifyContent: 'space-between',
                } }>
                    <CustomDatePicker
                        label='Выберите день'
                        value={ newHoliday }
                        onChange={ handleChangeHoliday }
                    />
                    <TextField
                        label='Комментарий к празднику'
                        defaultValue='Праздничный день'
                    />
                    <CustomButton onClick={ handleAdd }>
                        Добавить
                    </CustomButton>
                </Box>
            }
        </Box>
    );
    
};

export default DaysSettings;
