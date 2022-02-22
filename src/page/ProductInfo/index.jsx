import './productInfo.css';
import { ProductDetail } from '../../components/ProductDetail';
import { Slider } from '../../components/Slider';

export const ProductInfo = ({ productData }) => {
    
    const { images, thumbnails } = productData;

    return(
        <div className="product-info">
            
            <Slider images={ images} thumbnails={ thumbnails } />
            <ProductDetail productData={ productData } />

        </div>
    )
}