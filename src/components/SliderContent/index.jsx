import './slidercontent.css';

export const SliderContent = ({ children, activeIndex, sliderData }) => {

    return(
        <div className="slide__content">
            { 
                sliderData.map( ( slider, index ) => (
                    <div
                        key={ index }
                        className={ index === activeIndex ? "slide active" : "slide inactive" }
                    >
                        <img className="slide__img" src={ slider } />
                    </div>
                ))
            }
            {children}
        </div>
    )

}