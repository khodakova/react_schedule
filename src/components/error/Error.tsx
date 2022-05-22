import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import cn from 'classnames';
import React from 'react';

import errorImg from '@images/error.png';

interface ErrorProps {
    error: string;
    absolute?: boolean;
}

const Error: React.FC<ErrorProps> = ({error, absolute = false}) => {
    return (
        <div className={cn('error', {error_absolute: absolute})}>
            <div className="error__header">
                <div className="error__icon">
                    <ErrorOutlineIcon color="error" />
                </div>
            </div>
            <div className="error__subheader">{error}</div>
            <img className="error__img" src={errorImg} />
        </div>
    );
};

export default Error;
