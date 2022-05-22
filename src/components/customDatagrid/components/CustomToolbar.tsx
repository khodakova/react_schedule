import {
    GridToolbarColumnsButton,
    GridToolbarContainer,
} from '@mui/x-data-grid';
import React from 'react';

import QuickSearchToolbar from '@components/customDatagrid/components/CustomSearch';
import {ToolbarProps} from '@components/customDatagrid/components/customToolbarProps';

import CustomExport from './CustomExport';
import CustomButton from '@components/UI/CustomButton';
import {Box} from '@mui/material';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';

/**
 * Панель инструментов для грида
 * Отображается в зависимости от переданного значения необходимости отображения датагрида
 * @param value - значение поиска
 * @param onChange - изменение фразы для поиска
 * @param clearSearch - очистка поля поиска
 * @param exportTitle - заголовок для экспорта
 * @param needToolbar - необходимость наличия панели инструментов
 * @param extended - флаг для обозначения того, развернут датагрид или нет
 * @param handleChangeSize - разворачивание и сворачивание датагрида
 * @constructor
 */
const CustomToolbar: React.FC<ToolbarProps> = ({
                                                   value,
                                                   onChange,
                                                   clearSearch,
                                                   exportTitle,
                                                   needToolbar = false,
                                                   extended = false,
                                                   handleChangeSize,
                                               }) => {
    
    if ( !needToolbar ) {
        return null;
    }
    
    return (
        <GridToolbarContainer>
            <Box sx={ {flexBasis: '70%', display: 'flex'} }>
                <Box sx={ {padding: 1} }>
                    <CustomButton
                        size="small"
                        startIcon={ extended ? <ZoomInMapIcon/> : <ZoomOutMapIcon/> }
                        onClick={ handleChangeSize }
                    >
                        { extended ? 'Свернуть' : 'Развернуть на весь экран' }
                    </CustomButton>
                </Box>
                <GridToolbarColumnsButton/>
                <CustomExport exportTitle={ exportTitle }/>
            </Box>
            <QuickSearchToolbar
                value={ value }
                onChange={ onChange }
                clearSearch={ clearSearch }
            />
        </GridToolbarContainer>
    );
};

export default CustomToolbar;
