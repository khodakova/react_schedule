import 'react-toastify/dist/ReactToastify.css';

import {ApolloProvider} from '@apollo/client';
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import {ThemeProvider} from '@mui/material/styles';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import {useApolloClient} from '@src/http/apolloClient';
import Layout from '@src/layouts';
import {theme} from '@src/theme';
import {LocalizationProvider} from '@mui/lab';
import {ru} from 'date-fns/locale';
import useModal from '@src/hooks/useModal';
import {ModalContext} from './contexts/ModalContext';
import { HolidaysContext } from './contexts/HolidaysContext';
import {useHolidays} from '@src/hooks/useHolidays';

const App: React.FC = () => {
    const apolloClient = useApolloClient();
    const {modal, handleModal, modalContent, handleClose, handleChangeContent} = useModal();
    const { holidays, addHoliday } = useHolidays(4);
    
    // useEffect(() => {
    //     checkAuth();
    //     setAppLoaded();
    // }, []);
    // if (!appLoaded) {
    //     return <LinearProgress/>;
    // }
    
    return (
        <ApolloProvider client={ apolloClient }>
            <ThemeProvider theme={ theme }>
                <LocalizationProvider dateAdapter={ DateFnsAdapter } locale={ ru }>
                    <ModalContext.Provider value={ {
                        modal, handleModal, modalContent, handleClose, handleChangeContent,
                    } }>
                        <HolidaysContext.Provider value={ {holidays, addHoliday} }>
                            <Router>
                                <Layout/>
                                <ToastContainer/>
                            </Router>
                        </HolidaysContext.Provider>
                    </ModalContext.Provider>
                </LocalizationProvider>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
