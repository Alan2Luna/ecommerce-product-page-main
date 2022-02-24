import { ProductDetail } from '../../components/ProductDetail';
import { Slider } from '../../components/Slider';
import './productInfo.css';

export const ProductInfo = () => {
    
    return(
        <div className="product-info">
            
            <Slider />
            <ProductDetail />

        </div>
    )
}