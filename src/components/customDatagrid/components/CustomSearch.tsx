import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import {Box, IconButton, TextField} from '@mui/material';
import React from 'react';

import {QuickSearchToolbarProps} from '@components/customDatagrid/components/customToolbarProps';

/**
 * Панель быстрого поиска по всем значениям в массиве
 * @param value - значение поиска
 * @param clearSearch - очищение поисковой строки
 * @param onChange - изменение поисковой строки
 * @constructor
 */
const QuickSearchToolbar = ({
    value,
    clearSearch,
    onChange,
}: QuickSearchToolbarProps) => {
    return (
        <Box
            sx={{
                p: 0.5,
                pb: 0,
                flexBasis: '30%',
                display: 'flex',
                justifyContent: 'flex-end',
            }}
        >
            <TextField
                variant="standard"
                value={value}
                onChange={onChange}
                placeholder="Найти"
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small" />,
                    endAdornment: (
                        <IconButton
                            title="Clear"
                            aria-label="Clear"
                            size="small"
                            style={{
                                visibility: value ? 'visible' : 'hidden',
                            }}
                            onClick={clearSearch}
                        >
                            <ClearIcon fontSize="small" />
                        </IconButton>
                    ),
                }}
                sx={{
                    width: {
                        xs: 1,
                        sm: 'auto',
                    },
                    m: (theme) => theme.spacing(1, 0.5, 1.5),
                    '& .MuiSvgIcon-root': {
                        mr: 0.5,
                    },
                    '& .MuiInput-underline:before': {
                        borderBottom: 1,
                        borderColor: 'divider',
                    },
                }}
            />
        </Box>
    );
};

export default QuickSearchToolbar;
