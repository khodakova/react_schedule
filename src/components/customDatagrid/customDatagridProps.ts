import {GridColDef} from '@mui/x-data-grid';

export interface CustomDatagridProps<T> {
    /**
     * содержание шапки в виде массива значений типа GridColDef для удобного встраивания в датагрид
     */
    header: GridColDef[];
    /**
     * записи, которые будут отображаться в гриде в виде массива объектов, содержащих поля, названия которых совпадают
     * с названиями полей в шапке
     */
    rows?: T[] | null;
    /**
     * Имя класса
     */
    className: string;
    /**
     * Имя класса для записи
     */
    rowClassName: string;
    /**
     * Имя класса для ячейки
     */
    cellClassName: string;
    /**
     * Нужна ли панель с вспомогательными инструментами
     */
    needToolbar?: boolean;
    /**
     * Флаг загрузки
     */
    isLoading: boolean;
    /**
     * Заголовок, который будет отображаться при экспорте данных из грида
     */
    exportTitle: string;

    /**
     * Кастомная функция для получения уникального идентификатора, если у обрабатываемых записей id не ключевое поле
     * @param row - запись
     */
    getRowId?(row: T): number | string;
}
