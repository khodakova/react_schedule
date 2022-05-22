import React from 'react';

interface SpinnerProps {
    title?: string;
}

const Spinner: React.FC<SpinnerProps> = ({title}) => {
    return (
        <div className="ring">
            <p>{title || 'Загрузка'}</p>
            <span></span>
        </div>
    );
};

export default Spinner;
