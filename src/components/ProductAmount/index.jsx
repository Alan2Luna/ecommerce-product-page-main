import { useState } from 'react';
import { ReactComponent as IconPlus } from '../../images/icon-plus.svg';
import { ReactComponent as IconMinus } from '../../images/icon-minus.svg';
import './productamount.css';

export const ProductAmount = () => {

    const [ amount, setAmount ] = useState(0);

    const increaseBy = ( number ) => {
        setAmount( prev => Math.max(0, prev + number) );
    }
    console.log( amount )
    return (
        <div className="product-info__action">
            <button onClick={ () => increaseBy(-1) }  className="product-info__button-amount product-info__button-amount--minus">
                <IconMinus />
            </button>
            <span className="product-info__amount">{ amount }</span>
            <button onClick={ () => increaseBy(1) } className="product-info__button-amount product-info__button-amount--plus">
                <IconPlus />
            </button>
        </div>
    )
}