import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    itemCount: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,  
    reducers: {
        addToCart: (state, action) => {
            const { product } = action.payload;
            const existingItem = state.cartItems.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...product, quantity: 1 });
            }

            console.log(state);
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
