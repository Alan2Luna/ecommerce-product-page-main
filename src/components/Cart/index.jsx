import Product from '../../images/image-product-1-thumbnail.jpg';
import { IconDelete } from '../icons/IconDelete';
import './cart.css';

export const Cart = () => {

    return (
        <div className="cart-container">
            <div className="cart">
                <div className="cart__title">
                    <h2>cart</h2>
                </div>
                {
                    false
                        ? <div className="cart__content">
                            <div className="cart__product">
                                <img src={ Product } alt="" />
                                <div className="cart__description">
                                    <h3 class="color--dark-gray">autumn limitd edition snikers</h3>
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
                        : <div className="cart__empty">
                            <p>Your cart is empty</p>
                        </div>
                }
            </div>
        </div>
    )

}