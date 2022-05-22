/**
 * Праздничные дни по умолчанию
 */
import {IHoliday} from '@src/types';

export const defaultHolidays: Array<IHoliday> = [
    {month: 0, day: 1, comment: 'Новогодние праздники'},
    {month: 0, day: 2, comment: 'Новогодние праздники'},
    {month: 0, day: 3, comment: 'Новогодние праздники'},
    {month: 0, day: 4, comment: 'Новогодние праздники'},
    {month: 0, day: 5, comment: 'Новогодние праздники'},
    {month: 0, day: 6, comment: 'Новогодние праздники'},
    {month: 0, day: 7, comment: 'Новогодние праздники'},
    {month: 0, day: 8, comment: 'Новогодние праздники'},
    {month: 1, day: 23, comment: 'День защитника отечества'},
    {month: 2, day: 8, comment: 'Международный женский день'},
    {month: 4, day: 1, comment: 'Первомай'},
    {month: 4, day: 3, comment: 'Майские праздники'},
    {month: 4, day: 9, comment: 'День победы'},
    {month: 5, day: 12, comment: 'День России'},
    {month: 10, day: 4, comment: ''},
];

const customHolidays: Array<IHoliday> = [];

/**
 * Определение того, входит ли день в праздничные дни по умолчанию
 * @param day - день в виде месяц, день
 */
export const isHoliday = (day: IHoliday) => {
    const inDefaultHolidays = !!defaultHolidays.find(item => item.month === day.month && item.day === day.day);
    const inCustomHolidays = !!customHolidays.find(item => item.month === day.month && item.day === day.day);
    return inDefaultHolidays || inCustomHolidays;
};

/**
 * Получение всех выходных дней месяца
 * @param month
 */
export const getHolidaysInMonth = (month: number) => {
    const defaultHolidaysInMonth = defaultHolidays.filter(item => item.month === month);
    return customHolidays.concat(defaultHolidaysInMonth);
};

/**
 * Добавление нового праздничного дня в текущий месяц
 * @param day - новый праздничный день
 */
export const addToCustomHolidays = (day: IHoliday) => {
    customHolidays.push({month: day.month, day: day.day, comment: day.comment});
};
