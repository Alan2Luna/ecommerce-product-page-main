import { ProductDetail } from '../../components/ProductDetail';
import { Slider } from '../../components/Slider';
import { SliderModal } from '../../components/SliderModal';

import { Modal } from '../../components/Modal';
import { useOpenModal } from '../../hooks/useOpenModal';

import './productInfo.css';

export const ProductInfo = () => {

    const { isOpenModal, handleOpenModal } = useOpenModal();
    
    return(
        <div className="product-info">
            
            <Slider handleOpenModal={ handleOpenModal }/>
            <ProductDetail />

            {
                isOpenModal &&
                    <Modal>
                        <SliderModal handleOpenModal={ handleOpenModal }>
                            <Slider />
                        </SliderModal>
                    </Modal>
            }

        </div>
    )
}