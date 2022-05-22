import React, {useEffect} from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';

import {getLastRoute, setLastRoute} from '@src/helpers/localStorage';
import {IRoute, RouteNames, privateRoutes} from '@src/router';

const AppRouter: React.FC = () => {
    const nav = useNavigate();

    useEffect(() => {
        nav(JSON.parse(getLastRoute() || '{}'));
        window.onbeforeunload = () => {
            setLastRoute(JSON.stringify(window.location.pathname));
        };
    }, []);

    return (
        <Routes>
            {privateRoutes.map((route: IRoute) => (
                <Route
                    path={route.path}
                    key={route.path}
                    element={route.element}
                />
            ))}
            <Route
                path="*"
                element={<Navigate replace to={RouteNames.DASHBOARD} />}
            />
        </Routes>
    );
};

export default AppRouter;
