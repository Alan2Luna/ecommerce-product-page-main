import { useState, useEffect } from 'react';
import { SliderContent } from '../SliderContent';
import { SliderArrows } from "../SliderArrows"
import { SliderThumbnail } from '../SliderThumbnail';
import { sliderData } from "../../helpers/sliderData";
import './slider.css';

const len = sliderData.length - 1; 

export const Slider = () => {

    const [ activeIndex, setActiveIndex ] = useState(0);

    const handlePrev = () => ( setActiveIndex( activeIndex < 1 ? len : activeIndex - 1 ));
    const handleNext = () => ( setActiveIndex( activeIndex === len ? 0 : activeIndex + 1 ));
    const handleThumbnail = (index) => {
        setActiveIndex(index);
    }

    return(
        <div className="slider">
            <SliderContent activeIndex={ activeIndex } sliderData={ sliderData }>
                <SliderArrows 
                    prevSlide={ handlePrev }
                    nextSlide={ handleNext }
                />
            </SliderContent>
            <SliderThumbnail 
                activeIndex={ activeIndex }
                sliderData={ sliderData }
                handleThumbnail={ handleThumbnail } 
            />
        </div>

    )

}