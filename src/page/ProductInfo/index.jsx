import './productInfo.css';
import { Slider } from '../../components/Slider';
import { IconPlus } from '../../components/icons/IconPlus';
import { IconCart } from '../../components/icons/IconCart';
import { IconMinus } from '../../components/icons/IconMinus';

import { ProductAmount } from '../../components/ProductAmount';

export const ProductInfo = () => {
    return(
        <div className="product-info">
            
            <Slider />
            
            <div className="product-info__body">

                <p className="product-info__company-name">sneaker company</p>
                <h3 className="product-info__title">fall limited edition sneakers</h3>
                <p className="product-info__text">Theses low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

                <div className="product-info__content-price">
                    <div className="product-info__container">
                        <span className="product-info__price">$125.00</span>
                        <span className="product-info__price-off">50%</span>
                    </div>
                    <div className="product-info__previous-price">
                        <span>$250.00</span>
                    </div>
                </div>

                <div className="product-info__action-container">
                    <ProductAmount />
                    <button className="product-info__button">
                        <IconCart fill={"#eee"}/>
                        Add to cart
                    </button>
                </div>

            
            </div>

        </div>
    )
}