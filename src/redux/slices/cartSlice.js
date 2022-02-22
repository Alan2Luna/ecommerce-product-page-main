import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    amout: 0,
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.amout += action.payload;
        },
        deleteProductFromCart: (state) => {

        }
    }
})

export const { addProductToCart, deleteProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;