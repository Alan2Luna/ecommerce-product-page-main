import { useState } from 'react';
import { useSelector } from 'react-redux'

import { SliderContent } from '../SliderContent';
import { SliderArrows } from "../SliderArrows"
import { SliderThumbnail } from '../SliderThumbnail';

/* Porvando */

import './slider.css';

export const Slider = ({ handleOpenModal }) => {

    const [ activeIndex, setActiveIndex ] = useState(0);

    const { '1': product } = useSelector( state => state.products.products );
    const {  images, thumbnails } = product;


    const len = images.length - 1;



    const handlePrev = () => ( setActiveIndex( activeIndex < 1 ? len : activeIndex - 1 ));
    const handleNext = () => ( setActiveIndex( activeIndex === len ? 0 : activeIndex + 1 ));
    const handleThumbnail = (index) => {
        setActiveIndex(index);
    }

    return(
        <div className="slider">
            <SliderContent activeIndex={ activeIndex } sliderData={ images } handleOpenModal={ handleOpenModal }>
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