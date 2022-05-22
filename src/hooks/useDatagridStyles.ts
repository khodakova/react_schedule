import {useState} from 'react';

const initialStyles = {
    height: '70vh',
    width: '100%',
    position: 'relative',
};

const extendedStyles = {
    height: '100vh',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000
};

/**
 * Разворачивание датагрида на полный экран и обратно
 */
export const useDatagridStyles = () => {
    const [ extended, setExtended ] = useState(false);
    const [ styles, setStyles ] = useState(initialStyles);
    
    const handleChangeSize = () => {
        !extended ? setStyles(extendedStyles) : setStyles(initialStyles);
        setExtended(!extended);
    };
    
    return {styles, extended, handleChangeSize};
};
