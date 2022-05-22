import {getEmplDaysReactDataSheet, getTitleReactDataSheet} from '@src/helpers/date';

const title = getTitleReactDataSheet(5, 2022);
const emplDays = getEmplDaysReactDataSheet(5, 2022);

export const columns = [
    {label: 'ФИО', width: '10%'},
    {label: 'категория', width: '10%'},
    {label: 'смена', width: '5%'},
    ...title,
];

export const grid = [
    // [
    //     {readOnly: true, value: ''},
    //     {value: 'ФИО', readOnly: true},
    //     {value: 'категория', readOnly: true},
    //     {value: 'смена', readOnly: true},
    //     ...title,
    // ],
    [
        {readOnly: true, value: 1},
        {value: 'ФИО 1'},
        {value: 3},
        ...emplDays,
    ],
    [
        {readOnly: true, value: 2},
        {value: 'ФИО 2'},
        {value: 4},
        ...emplDays,
    ],
    [
        {readOnly: true, value: 3},
        {value: 'ФИО 3'},
        {value: 3},
        ...emplDays,
    ],
    [
        {readOnly: true, value: 4},
        {value: 'ФИО 4'},
        {value: 4},
        ...emplDays,
    ],
];
