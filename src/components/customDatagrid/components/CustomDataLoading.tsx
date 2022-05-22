import {Box} from '@mui/material';
import React from 'react';

/**
 * Компонент отображения загрузки
 * @constructor
 */
const CustomDataLoading = () => {
    return (
        <Box
            sx={{
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            }}
        >
            Идет загрузка данных...
        </Box>
    );
};

export default CustomDataLoading;
