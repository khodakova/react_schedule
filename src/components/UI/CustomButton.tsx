import {Button, ButtonProps, CircularProgress} from '@mui/material';
import React from 'react';

interface CustomButtonProps extends ButtonProps {
    loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    loading = false,
    children,
    color = 'primary',
    variant = 'contained',
    ...props
}) => {
    return (
        <Button
            {...props}
            variant={variant}
            color={color}
            endIcon={
                loading ? (
                    <CircularProgress color="inherit" size={'25px'} />
                ) : null
            }
        >
            {children}
        </Button>
    );
};

export default CustomButton;
