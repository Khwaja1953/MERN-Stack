import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [
            { id: 1, name: "Laptop", price: 60000 },
            { id: 2, name: "Headphones", price: 2000 },
            { id: 3, name: "Keyboard", price: 1500 },
            { id: 4, name: "Mouse", price: 800 },
            { id: 5, name: "Smartwatch", price: 7000 },
        ]
    },
    reducers: {
        addProduct: (state, action)=>{
            state.items.push(action.payload);
        }
    }
});
export const {addProduct} = productSlice.actions
export { productSlice }
export default productSlice.reducer;