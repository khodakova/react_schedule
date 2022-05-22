import {TestSystem} from '@src/generated/types';

export interface CustomDatePickerProps {
    /**
     * Название поля
     */
    label: string;
    /**
     * Значение поля
     */
    value: string | number | null | undefined;
    /**
     * Флаг о возможности указания поля пустым
     */
    canBeNull?: boolean;
    /**
     * Как будем помечать чекбокс, если значение поля может быть пустым
     */
    nullLabel?: string;
    /**
     * Имя класса для текстового поля выбора даты
     */
    classNameTextField?: string;
    /**
     * Название поля в объекте
     */
    field: keyof TestSystem;
    /**
     * Имя поля для формика (необходимо для валидации)
     */
    name: string;

    /**
     * Функция изменения значения даты
     * @param args
     */
    onChange(...args: any): any;
}
