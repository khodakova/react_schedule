import {DataGrid} from '@mui/x-data-grid';
import React, {useEffect} from 'react';
import {CustomDatagridProps} from '@components/customDatagrid/customDatagridProps';
import CustomDataLoading from './components/CustomDataLoading';
import CustomNoRowsOverlay from './components/CustomNoRowsOverlay';
import CustomPagination from './components/CustomPagination';
import CustomToolbar from './components/CustomToolbar';
import {Paper} from '@mui/material';
import {useFilter} from '@src/hooks/useFilter';
import {useDatagridStyles} from '@src/hooks/useDatagridStyles';

/**
 * Кастомизированный датагрид с учетом загрузки, панели инструментов, пагинации, отсутствия значений
 * @param props
 * @constructor
 */
const CustomDatagrid: <T>(
    p: CustomDatagridProps<T>,
) => React.ReactElement<CustomDatagridProps<T>> = ({
                                                       rows,
                                                       isLoading,
                                                       getRowId,
                                                       cellClassName,
                                                       rowClassName,
                                                       className,
                                                       header,
                                                       needToolbar,
                                                       exportTitle,
                                                   }) => {
    const {searchText, filteredRows, setFilteredRows, requestSearch, clearSearch} = useFilter(rows || []);
    const {styles, extended, handleChangeSize} = useDatagridStyles();
    
    useEffect(() => {
        if (rows) {
            setFilteredRows(rows);
        }
    }, [rows]);
    
    return (
        <Paper sx={ {...styles} }>
            <DataGrid
                initialState={ {
                    pagination: {
                        page: 0,
                        pageSize: 50,
                    },
                } }
                components={ {
                    Pagination: CustomPagination,
                    Toolbar: CustomToolbar,
                    LoadingOverlay: CustomDataLoading,
                    NoRowsOverlay: CustomNoRowsOverlay,
                } }
                componentsProps={ {
                    toolbar: {
                        value: searchText,
                        onChange: requestSearch,
                        clearSearch: clearSearch,
                        exportTitle: exportTitle,
                        needToolbar: needToolbar,
                        extended: extended,
                        handleChangeSize: handleChangeSize,
                    },
                } }
                loading={ isLoading }
                columns={ header }
                rows={ filteredRows || [] }
                pagination
                hideFooterSelectedRowCount
                experimentalFeatures={{ newEditingApi: true }}
                className={ className }
                getRowId={ getRowId }
                getRowClassName={ () => rowClassName }
                getCellClassName={ () => cellClassName }
                sx={ {...styles} }
            />
        </Paper>
    );
};

export default CustomDatagrid;
