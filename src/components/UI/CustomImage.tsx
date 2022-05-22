import React from 'react';
import { Skeleton } from '@mui/material';

interface ImageProps {
    alt: string,
    src: string,
    className: string,
    width: number,
    height: number,

    onClick?(...arg: any): any
}

const CustomImage: React.FC<ImageProps> = ({ alt, src, className, width, height, onClick }) => {
    const [isLoading, setLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const handleLoad = async () => {
        setLoading(false);
        setIsError(false);
    };

    const handleError = async () => {
        setLoading(false);
        setIsError(true);
    };

    return (
        <div
            className={ className }
            onClick={ onClick }
        >
            { isError && !isLoading && <Skeleton variant='circular' width={ width } height={ height }/> }
            { !isError && isLoading && <Skeleton variant='circular' width={ width } height={ height }/> }
            <img
                style={ {
                    display: isError || isLoading ? 'none' : 'initial',
                } }
                alt={ alt || 'Default Alt' }
                onLoad={ handleLoad }
                onError={ handleError }
                src={ src }
            />
        </div>
    );
};
export default CustomImage;