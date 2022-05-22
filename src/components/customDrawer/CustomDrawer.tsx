import React from 'react';
import {Drawer, DrawerProps} from '@mui/material';


const CustomDrawer: React.FC<DrawerProps> = ({open, onClose, children, ...props}) => {
    
    return (
        <Drawer
            anchor={ 'right' }
            open={ open }
            onClose={ onClose }
            { ...props }
        >
            { children }
        </Drawer>
    );
};

export default CustomDrawer;
