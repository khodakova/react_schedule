import '@src/styles/styles.scss';

import {createBrowserHistory} from 'history';
import React from 'react';
import ReactDom from 'react-dom';

import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';

import App from './App';

export const history = createBrowserHistory();

ReactDom.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    document.getElementById('root'),
);
