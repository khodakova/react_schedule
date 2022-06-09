import React from 'react';
import {lazy} from 'react';

const Login = lazy(() => import('@src/modules/login'));
const Dashboard = lazy(() => import('@src/modules/dashboard'));
const Dashboard2 = lazy(() => import('@src/modules/dashboard2'));
// const Dashboard3 = lazy(() => import('@src/modules/dashboard3'));
// const Dashboard4 = lazy(() => import('@src/modules/dashboard4'));

export interface IRoute {
    path: string;
    element: React.ReactElement;
}

export enum RouteNames {
    LOGIN = '/login',
    DASHBOARD = '/',
    REACT_DATASHEET = '/react-datasheet',
    REACT_DATA_GRID = '/react-data-grid',
    REACT_VIRTUALIZED = '/react-virtualized',
}

export interface IMenuItem {
    name: string;
    to: string;
    label: string;
    element: React.ReactElement;
}

export const HEADERS: Array<IMenuItem> = [
    {
        name: 'mui',
        to: RouteNames.DASHBOARD,
        label: 'MUI',
        element: <Dashboard/>,
    },
    // {
    //     name: 'react-datasheet',
    //     to: RouteNames.REACT_DATASHEET,
    //     label: 'REACT_DATASHEET',
    //     element: <Dashboard2/>,
    // },
    // {
    //     name: 'react-datagrid',
    //     to: RouteNames.REACT_DATA_GRID,
    //     label: 'REACT_DATA_GRID',
    //     element: <Dashboard3/>,
    // },
    // {
    //     name: 'react-virtualized',
    //     to: RouteNames.REACT_VIRTUALIZED,
    //     label: 'REACT_VIRTUALIZED',
    //     element: <Dashboard4/>,
    // },
];

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: <Login/>},
];

export const privateRoutes: IRoute[] = HEADERS.map(item => {
    return {
        path: item.to, element: item.element,
    };
});
