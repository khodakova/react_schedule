import {format, isSaturday, isSunday, lastDayOfMonth} from 'date-fns';
import {ru} from 'date-fns/locale';
import {GridColDef} from '@mui/x-data-grid';
import {IDateCondition, IDay, IDays, ITabelRow} from '@src/types';
import TimeRangePicker from '@components/timeRangePicker';
import React from 'react';
import {isHoliday} from '@src/helpers/holidays';
import DayEditCell from '@components/dayEditCell';

/**
 * Получение массива с днями в зависимости от месяца и года
 * @param month - месяц
 * @param year - год
 */
export const getDays = (month: number, year: number): IDay[] => {
    const lastDay = lastDayOfMonth(month).getDate();
    const days: IDay[] = [];
    let item: IDay;
    let dat;
    for ( let i = 0; i < lastDay; i++ ) {
        dat = new Date(year, month, i);
        item = {
            num: i,
            isSaturday: isSaturday(dat),
            isSunday: isSunday(dat),
            isHoliday: isHoliday({month, day: i + 1}),
            name: format(dat, 'EEEEEE', {locale: ru}),
        };
        days.push(item);
    }
    return days;
};

/**
 * Определение статуса дня - выходной или нет
 * @param item
 */
export const isWeekend = (item: IDay) => item.isSunday || item.isSaturday || item.isHoliday;

/**
 * Получение массива полей для заголовка датагрида
 * @param month - месяц
 * @param year - год
 */
export const getDaysFields = (month: number, year: number) => {
    const daysFields: GridColDef[] = [];
    const days = getDays(month, year);
    
    days.map(item => {
        daysFields.push({
                field: `day_${ ++item.num }`,
                headerName: `${ (item.num).toString() }`,
                width: 66,
                editable: true,
                cellClassName: isWeekend(item) ? 'tabel__grid__cell_weekend' : 'tabel__grid__cell',
                headerClassName: isWeekend(item) ? 'tabel__grid__cell_weekend' : 'tabel__grid__cell',
            },
        );
    });
    
    return daysFields;
};

export const getHeader = (dateCondition: IDateCondition) => {
    const {month, year} = dateCondition;
    const daysFields = getDaysFields(month, year);
    
    daysFields.map(item => {
        item.renderCell = (params) => {
            const {field, row} = params;
            return (
                <div>
                    <p>{ row[field] && row[field].time_1 }</p>
                    <p>{ row[field] && row[field].time_2 }</p>
                </div>
            );
        };
        item.renderEditCell = (params) => {
            const {field, row} = params;
            return <DayEditCell timeRange={row[field]}/>;
        };
    });
    
    const header: GridColDef[] = [
        {field: 'name', headerName: 'ФИО'},
        {field: 'category', headerName: 'Должность'},
        {field: 'rate', headerName: 'Ставка'},
        {field: 'shift', headerName: 'Смена'},
        ...daysFields,
        {field: 'workingDays', headerName: 'Рабочих дней'},
        {field: 'monthGeneral', headerName: 'Всего в месяц'},
        {field: 'monthNorm', headerName: 'Норма в месяц (час)'},
        {field: 'break', headerName: 'Перерыв (час)'},
    ];
    return header;
};

export const getEmplDays = (month: number, year: number) => {
    const obj: Partial<IDays> = {};
    getDays(month, year).map(item => {
            if ( item.isSunday || item.isSaturday || item.isHoliday ) {
                obj[`day_${ +item.num + 1 }` as keyof IDays] = null;
            } else {
                obj[`day_${ +item.num + 1 }` as keyof IDays] = {
                    time_1: '08:00',
                    time_2: '14:00',
                };
            }
        },
    );
    return obj;
};

export const getRows = (dateCondition: IDateCondition) => {
    const emplDays = getEmplDays(dateCondition.month, dateCondition.year);
    
    const rows: ITabelRow[] = [
        {
            id: 1,
            name: 'атата',
            shift: 6,
            rate: 1,
            category: 'лошара',
            ...emplDays,
            workingDays: null,
            monthGeneral: null,
            monthNorm: null,
            breakTime: null,
        },
        {
            id: 2,
            name: 'кто-то еще',
            shift: 6,
            rate: 1,
            category: 'лошара',
            ...emplDays,
            workingDays: null,
            monthGeneral: null,
            monthNorm: null,
            breakTime: null,
        },
    ];
    
    return rows;
};

export const getTitleReactDataSheet = (month: number, year: number) => {
    const obj: any = [];
    getDays(month, year).map(item => {
        obj.push({label: +item.num + 1, width: '25px'});
    });
    return obj;
};

export const getEmplDaysReactDataSheet = (month: number, year: number) => {
    const obj: any = [];
    getDays(month, year).map(item => {
        if ( item.isSunday || item.isSaturday || item.isHoliday ) {
            obj.push({value: null});
        } else {
            obj.push({value: 8});
        }
    });
    return obj;
};
