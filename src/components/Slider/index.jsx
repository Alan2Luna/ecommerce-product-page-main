import { useState } from 'react';
import { SliderContent } from '../SliderContent';
import { SliderArrows } from "../SliderArrows"
import { SliderThumbnail } from '../SliderThumbnail';
import './slider.css';

export const Slider = ({ images, thumbnails }) => {

    const [ activeIndex, setActiveIndex ] = useState(0);
    const len = images.length - 1;

    const handlePrev = () => ( setActiveIndex( activeIndex < 1 ? len : activeIndex - 1 ));
    const handleNext = () => ( setActiveIndex( activeIndex === len ? 0 : activeIndex + 1 ));
    const handleThumbnail = (index) => {
        setActiveIndex(index);
    }

    return(
        <div className="slider">
            <SliderContent activeIndex={ activeIndex } sliderData={ images }>
                <SliderArrows 
                    prevSlide={ handlePrev }
                    nextSlide={ handleNext }
                />
            </SliderContent>
            <SliderThumbnail 
                activeIndex={ activeIndex }
                sliderData={ thumbnails }
                handleThumbnail={ handleThumbnail } 
            />
        </div>

    )

}