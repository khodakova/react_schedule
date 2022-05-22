import {createContext, useContext} from "react";

export type ModalType = {
    modal: boolean,
    handleModal: (arg?: any) => any,
    modalContent: React.ReactNode | boolean,
    handleClose: () => any,
    handleChangeContent: (arg?: any) => any,
}

export const ModalContext = createContext<ModalType>({
    modal: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleModal: () => {},
    modalContent: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleClose: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleChangeContent: () => {},
});

export const useModalContext = () => useContext(ModalContext);
