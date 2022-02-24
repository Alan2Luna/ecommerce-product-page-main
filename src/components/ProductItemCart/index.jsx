import { useSelector, useDispatch } from 'react-redux';
import { deleteProductFromCart } from '../../redux/slices/cartSlice';

import Product from '../../images/image-product-1-thumbnail.jpg';
import { IconDelete } from '../icons/IconDelete';
import { priceProduct, finalPrice } from '../../helpers/helpers';

import './productitemcart.css';

export const ProductItemCart = () => {

    const idProduct = useSelector( state => state.cart.productsInCart );
    const product = useSelector( state => state.products.products);
    const dispatch = useDispatch();

    return (

        <div className="cart__content">

            {
                Object.keys(idProduct).map( id => {
                    const { productName, price, discountRate } = product[id];
                    const priceItem = priceProduct(price, discountRate)
                    return (
                    <div key={id} className="cart__product">
        
                        <img src={ Product } alt="" />
        
                        <div className="cart__description">
        
                            <h3 className="color--dark-gray">{ productName }</h3>
        
                            <div className="color--dark-gray">
        
                                <span>${ priceItem }</span> X <span>{ idProduct[id]  }</span> <span className="cart__result">${ finalPrice(priceItem,idProduct[id]) }</span>
        
                            </div>
                        </div>
        
                        <button onClick={ () => dispatch( deleteProductFromCart(id) ) } className="cart__delete">
        
                            <IconDelete />
        
                        </button>
        
                    </div>
                )})
            }

            <button className="cart__button">checkout</button>

        </div>

    )

}