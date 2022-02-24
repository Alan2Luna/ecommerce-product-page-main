
export const priceProduct = (price, rate) => {
    if (rate) {
        let result = price - price * rate;
        return result.toFixed(2);
    } 

    return price.toFixed(2);
}

export const finalPrice = (price, amount) => {
    return (price * amount).toFixed(2);
}