import './slidercontent.css';

export const SliderContent = ({ children, activeIndex, sliderData, handleOpenModal }) => {
    
    const handleModal = () => {
        if(!handleOpenModal) {
            return
        }
        return handleOpenModal()
    }

    return(
        <>
            <div className='slide__content' onClick={ () =>  handleModal() }>
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
        </>
    )

}