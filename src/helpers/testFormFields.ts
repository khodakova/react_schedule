import {TestSystem} from '@src/generated/types';

interface IField {
    field: keyof TestSystem;
    label: string;
    multiline: boolean;
    type: 'string' | 'number' | 'date';
    canBeNull: boolean;
    nullLabel?: string;
}

export const testFormFields: IField[] = [
    {
        field: 'regNum',
        label: 'Номер регистрационного удостоверения',
        multiline: false,
        type: 'string',
        canBeNull: false,
    },
    {
        field: 'regDate',
        label: 'Дата регистрации удостоверения',
        multiline: false,
        type: 'date',
        canBeNull: false,
    },
    {
        field: 'suitCreateDate',
        label: 'Дата выпуска набора реагентов',
        multiline: false,
        type: 'date',
        canBeNull: false,
    },
    {
        field: 'suitDateEnd',
        label: 'Дата окончания годности набора реагентов',
        multiline: false,
        type: 'date',
        canBeNull: true,
        nullLabel: 'Бессрочно',
    },
    {
        field: 'lot',
        label: 'Информация о партии',
        multiline: false,
        type: 'string',
        canBeNull: false,
    },
    {
        field: 'medProductName',
        label: 'Наименование набора реагентов',
        multiline: false,
        type: 'string',
        canBeNull: false,
    },
    {
        field: 'vendor',
        label: 'Производитель/продавец',
        multiline: false,
        type: 'string',
        canBeNull: false,
    },
    // {
    //     field: 'forConclusion',
    //     label: 'Информация для заключения',
    //     multiline: true,
    //     type: 'string',
    //     canBeNull: false,
    // },
];

export const extendedTestFormFields = testFormFields.concat([
    {
        field: 'forConclusion',
        label: 'Информация для заключения',
        multiline: true,
        type: 'string',
        canBeNull: false,
    },
]);
