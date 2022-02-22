import { ReactComponent as IconPlus } from '../../images/icon-plus.svg';
import { ReactComponent as IconMinus } from '../../images/icon-minus.svg';
import './productamount.css';

export const ProductAmount = ({ amount, increaseBy }) => {
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