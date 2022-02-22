import Product from '../../images/image-product-1-thumbnail.jpg';
import { IconDelete } from '../icons/IconDelete';
import './productitemcart.css';

export const ProductItemCart = () => {

    return (

        <div className="cart__content">

            <div className="cart__product">

                <img src={ Product } alt="" />

                <div className="cart__description">

                    <h3 className="color--dark-gray">autumn limitd edition snikers</h3>

                    <div className="color--dark-gray">

                        <span>$125.00</span> x <span>3</span> <span className="cart__result">$375.00</span>

                    </div>
                </div>

                <button className="cart__delete">

                    <IconDelete />

                </button>

            </div>

            <button className="cart__button">checkout</button>

        </div>

    )

}