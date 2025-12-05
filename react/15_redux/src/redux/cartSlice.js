import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state,action)=>{
            const existing = state.cartItems.find(item => item.id === action.payload.id);
            if(!existing){
                state.cartItems.push(action.payload);
            }
        },
        removeFromCart: (state,action)=>{
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },
        clearCart: (state)=>{
            state.cartItems = [];
        }
    },
});
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions
export { cartSlice }
export default cartSlice.reducer