import { IconNext } from '../icons/IconNext';
import { IconPrevious } from '../icons/IconPrevious';
import './sliderarrows.css';

export const SliderArrows = ({ prevSlide, nextSlide }) => {
    
    return(
        <div className="slider__arrows">
            <button onClick={ prevSlide } className="slider__arrow slider__arrow--previous">
                <IconPrevious />
            </button>
            <button onClick={ nextSlide } className="slider__arrow slider__arrow--next">
                <IconNext />
            </button>
        </div>
    )

}