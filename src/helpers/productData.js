import Product1 from '../images/image-product-1.jpg';
import Product2 from '../images/image-product-2.jpg';
import Product3 from '../images/image-product-3.jpg';
import Product4 from '../images/image-product-4.jpg';
import ProductThumbnail1 from '../images/image-product-1-thumbnail.jpg';
import ProductThumbnail2 from '../images/image-product-2-thumbnail.jpg';
import ProductThumbnail3 from '../images/image-product-3-thumbnail.jpg';
import ProductThumbnail4 from '../images/image-product-4-thumbnail.jpg';

export const productData = {
    id: 1,
    productName: 'fall limited edition sneakers',
    companyName: 'sneaker company',
    productDescription: "Theses low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    images: [
            Product1,
            Product2,
            Product3,
            Product4
    ],
    thumbnails: [
            ProductThumbnail1,
            ProductThumbnail2,
            ProductThumbnail3,
            ProductThumbnail4
    ],
    price: 250,
    discountRate: 0.50,
}