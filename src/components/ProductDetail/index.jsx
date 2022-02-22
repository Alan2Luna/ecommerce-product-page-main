import { useState } from 'react';
import { ProductAmount } from '../ProductAmount';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../redux/slices/cartSlice';

import { IconCart } from '../icons/IconCart';
import './productdetail.css';

export const ProductDetail = ({ productData }) => {

    const [ amount, setAmount ] = useState(1);
    const { 
        productName, 
        companyName, 
        productDescription, 
        discountRate, 
        price 
    } = productData;

    const dispatch = useDispatch();

    const increaseBy = ( number ) => {
        setAmount( prev => Math.max(1, prev + number) );
    }

    const addDecimals = (number) => {
        return number.toFixed(2);
    }

    const percentage = (number) => {
        return number * 100;
    }

    return (
        <div className="product-info__body">

            <p className="product-info__company-name">{ companyName }</p>
            <h3 className="product-info__title">{ productName }</h3>
            <p className="product-info__text">{ productDescription }</p>

            <div className="product-info__content-price">
                <div className="product-info__container">
                    <span className="product-info__price">$125.00</span>
                    <span className="product-info__price-off">{ percentage(discountRate) }%</span>
                </div>
                <div className="product-info__previous-price">
                    <span>${ addDecimals(price) }</span>
                </div>
            </div>

            <div className="product-info__action-container">
                <ProductAmount amount={ amount } increaseBy={ increaseBy } />
                <button onClick={ () => dispatch( addProductToCart(amount) ) } className="product-info__button">
                    <IconCart fill={"#eee"}/>
                    Add to cart
                </button>
            </div>

        </div>
    )
}