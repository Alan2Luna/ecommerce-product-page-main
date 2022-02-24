import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productsInCart: {},
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const { id, amount } = action.payload;

            if (state.productsInCart[id]) {
                state.productsInCart[id] += amount;
            } else {
                state.productsInCart[id] = amount;
            }
        },
        deleteProductFromCart: (state, action) => {
            delete state.productsInCart[action.payload];
        }
    }
})

export const { addProductToCart, deleteProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getNumProducts = (state) => {
    let numProducts = 0;

    for (let id in state.cart.productsInCart) {
        numProducts += state.cart.productsInCart[id];
    }

    return numProducts;
}