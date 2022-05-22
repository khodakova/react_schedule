import {deepPurple, yellow} from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';
import {ruRU} from '@mui/x-data-grid';

export const theme = createTheme(
    {
        palette: {
            primary: {
                main: deepPurple[700],
            },
            secondary: {
                main: yellow[500],
            },
        },
    },
    ruRU,
);
