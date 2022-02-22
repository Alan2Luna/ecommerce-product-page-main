import { useState } from 'react';
import { useSelector } from 'react-redux';
import { EmptyCart } from '../EmptyCart';
import { ProductItemCart } from '../ProductItemCart';

import { IconCart } from '../icons/IconCart';
import './cart.css';

export const Cart = () => {

    const [ cartOpen, setCartOpen ] = useState(false);
    const productAmount = useSelector( ( state ) => state.cart.amout );
    console.log(productAmount);

    return (
        <>
            <button onClick={ () => setCartOpen(prev => !prev) } className="cart__container-icon">
                <IconCart width={ 22 } height={ 22 } />
                {
                    productAmount > 0 && (<span className="amount_product">{ productAmount }</span>)
                }
            </button>
            {
                cartOpen &&
                <div className="cart-container">
                <div className="cart">
                    <div className="cart__title">
                        <h2>cart</h2>
                    </div>
                    {
                        productAmount
                            ? <ProductItemCart />
                            : <EmptyCart />
                    }
                </div>
            </div>
            }
        </>
    )

}