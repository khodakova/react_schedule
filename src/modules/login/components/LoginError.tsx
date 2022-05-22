import Alert from '@mui/material/Alert';
import React from 'react';

interface ErrorsProps {
    error: string;
}

// ошибки в форме списка при авторизации
const LoginError: React.FC<ErrorsProps> = ({error}) => {
    if (error) {
        return (
            <Alert
                severity={'error'}
                sx={{
                    backgroundColor: 'rgba(244, 199, 199, .3)',
                    color: 'rgb(139, 1, 1)',
                }}
            >
                {error}
            </Alert>
        );
    } else {
        return null;
    }
};

export default LoginError;
