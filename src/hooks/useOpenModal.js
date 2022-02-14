import { useState } from 'react';

export const useOpenModal = () => {
    
    const [ isOpenModal, setIsOpenModal ] = useState(false);

    const handleOpenModal = () => {
        setIsOpenModal( prevState => !prevState );
    }

    return {
        isOpenModal,
        handleOpenModal
    }
}