import {format, parse, parseISO} from 'date-fns';

export const formatToSave = (val: string) =>
    format(Date.parse(val), 'dd.MM.yyyy');

export const formatDate = (val: string) => format(parseISO(val), 'dd.MM.yyyy');

export const formatDateTime = (val: string) =>
    format(parseISO(val), 'dd.MM.yyyy HH:mm');

export const formatToDatePicker = (val?: any) =>
    val ? parse(val.toString(), 'dd.MM.yyyy', new Date()).toString() : '';

export const maskMap = {
    ru: '__.__.____',
};
