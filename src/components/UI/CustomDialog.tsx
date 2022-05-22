import {Dialog, DialogTitle, styled} from '@mui/material';
import React from 'react';

interface CustomDialogProps {
    open: boolean;
    title: string;

    onClose(...arg: any): void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
    open,
    title,
    onClose,
    children,
}) => {
    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            scroll="paper"
            maxWidth={false}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
            {children}
        </Dialog>
    );
};

export default CustomDialog;
