import './sliderthumbnail.css'

export const SliderThumbnail = ({ activeIndex, sliderData, handleThumbnail }) => {

    return (

        <div className="slider__thumbnails">

            {

                sliderData.map( (slider, index) => (

                    <div key={ index } className="slider__thumbnail">

                        <img src={ slider.thumbnail } />

                        <button 
                            onClick={ () => handleThumbnail(index) } 
                            className={`slider__thumbnail-overlay ${ activeIndex == index ? "active-overlay" : "" }`}
                        >
                        </button>
                    
                    </div>
                ))
            }

        </div>
    )
}