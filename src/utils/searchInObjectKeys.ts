import {escapeRegExp} from '@src/helpers/regExp';

/**
 * Реализация поиска введенной строки по ключам объектов в массиве
 * @param searchValue - значение для поиска
 * @param rows - массив объектов, в котором нужно произвести поиск
 */
export const searchInObjectKeys = <T>(searchValue: string, rows: T[]) => {
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    return rows.filter((row: any) => {
        return Object.keys(row).some((field: any) => {
            return searchRegex.test(row[field] ? row[field].toString() : '');
        });
    });
};
