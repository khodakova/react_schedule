import React, {Fragment, useEffect} from 'react';
import {useLocation} from 'react-router';
import {useNavigate} from 'react-router-dom';

import {isAuth} from '@src/http/reactivities/isAuth';
import Login from '@src/modules/login';
import {HEADERS} from '@src/router';

import Footer from './footer';
import Header from './header';
import Main from './main';

const Layout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // отметка последней рабочей вкладки после перезагрузки страницы
    useEffect(() => {
        const foundSection =
            HEADERS.find((item) => item.to === location.pathname) || HEADERS[0];
        navigate(foundSection.to);
    }, []);

    if (isAuth()) {
        return (
            <Fragment>
                <Header />
                <Main />
                <Footer />
            </Fragment>
        );
    }

    return <Login />;
};

export default Layout;
