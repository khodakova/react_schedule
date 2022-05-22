import React, {useState} from 'react';
import {searchInObjectKeys} from '@src/utils/searchInObjectKeys';

/**
 * Фильтрация полей по введенному значению
 * @param rows - массив объектов любого типа
 */
export const useFilter = <T>(rows: Array<T>) => {
    const [ searchText, setSearchText ] = useState('');
    const [ filteredRows, setFilteredRows ] = useState(rows);
    
    /**
     * фильтрация в зависимости от введенного в поисковой строке значения по всем полям шапки
     * @param searchValue - введенное в поисковую строку значение
     */
    const requestSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
        if ( rows ) {
            setFilteredRows(searchInObjectKeys(event.target.value, rows));
        }
    };
    
    /**
     * Очистка поля для поиска
     */
    const clearSearch = () => {
        setSearchText('');
        if ( rows ) {
            setFilteredRows(searchInObjectKeys('', rows));
        }
    };
    
    return {searchText, filteredRows, setFilteredRows, requestSearch, clearSearch}
};
