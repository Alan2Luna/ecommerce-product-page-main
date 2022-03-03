import { IconClose } from '../icons/IconClose';
import './slidermodal.css';

export const SliderModal = ({ children, handleOpenModal }) => {

    return (
        <div className="slider-modal">
            <div className="slider-container">
                <button className="slider-modal__btn-close" onClick={ () => handleOpenModal() }>
                    <IconClose fill={"#fff"}/>
                </button>
                { children }
            </div>
        </div>
    )
}