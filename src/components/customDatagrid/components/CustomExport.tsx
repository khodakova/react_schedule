import 'jspdf-autotable';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PrintIcon from '@mui/icons-material/Print';
import {Box} from '@mui/material';
import {useGridApiContext} from '@mui/x-data-grid';
import React from 'react';

import {toastWarn} from '@src/helpers/toast';
import {exportPdfTable} from '@src/utils/pdf/exportPdfTable';

import {ExportToolbarProps} from '@components/customDatagrid/components/customToolbarProps';
import CustomButton from '@components/UI/CustomButton';

/**
 * Панель экспорта из грида с использованием jspdf-autotable
 * @constructor
 */
const CustomExport: React.FC<ExportToolbarProps> = ({exportTitle}) => {
    const context = useGridApiContext();

    const showWarning = () => {
        toastWarn('Нет данных по указанным параметрам');
    };

    // достаем шапку
    const columns = context.current.getAllColumns();
    // достаем записи
    const rows = Array.from(context.current.getVisibleRowModels().values());

    /**
     * Обработка нажатия на кнопку Выгрузить
     */
    const handleClick = () => {
        rows.length > 0
            ? exportPdfTable(columns, rows, exportTitle)
            // ? exportPdfTable(columns.slice(0, -1), rows, exportTitle)
            : showWarning();
    };

    /**
     * Обработка нажатия на кнопку Распечатать
     */
    const handlePrint = () => {
        rows.length > 0
            ? exportPdfTable(columns.slice(0, -1), rows, exportTitle, 'print')
            : showWarning();
    };

    return (
        <Box
            component="div"
            sx={{display: 'flex', justifyContent: 'flex-start', padding: 1}}
        >
            <CustomButton
                onClick={handleClick}
                startIcon={<FileDownloadIcon />}
                size="small"
            >
                Выгрузить
            </CustomButton>
            <CustomButton
                onClick={handlePrint}
                startIcon={<PrintIcon />}
                size="small"
                className="export__btn"
            >
                Распечатать
            </CustomButton>
        </Box>
    );
};

export default CustomExport;
