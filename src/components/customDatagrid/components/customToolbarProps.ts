/**
 * Пропсы для панели быстрого поиска
 */
export interface QuickSearchToolbarProps {
    /**
     * функция для очистки поискового поля
     */
    clearSearch: () => void;
    /**
     * функция для изменения значения в поисковом поле
     */
    onChange: () => void;
    /**
     * значение для поиска
     */
    value: string;
}

/**
 * Пропсы для панели экспорта
 */
export interface ExportToolbarProps {
    /**
     * заголовок для экспорта данных
     * представлен в виде массива строк для дробления заголовка на части
     */
    exportTitle: string[];
}

/**
 * Пропсы для панели инструментов
 */
export interface ToolbarProps
    extends QuickSearchToolbarProps,
        ExportToolbarProps {
    /**
     * Флаг необходимости отображения панели инструментов
     */
    needToolbar: boolean;
    /**
     * Флаг, обозначающий, развернут датагрид или нет
     */
    extended: boolean;
    /**
     * Функция для перевода датагрида в полноэкранный режим и обратно
     */
    handleChangeSize: () => void;
}
