import React, { Component, ErrorInfo, ReactNode } from 'react';
import './style.scss';
import error from '@images/error.jpg';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className='error-boundary'>
                    <img src={ error }/>
                    <h1>Что-то пошло не так...</h1>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;