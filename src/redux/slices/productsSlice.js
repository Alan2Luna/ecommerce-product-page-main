import { createSlice } from '@reduxjs/toolkit';

const initialState: {
    product: [];
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})