import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 10
    } ,
    reducers:{
        increment: (state)=>{state.value += 1},
        decerement: (state) => {state.value -=1},
        reset: (state)=>{state.value = 0}
    }
});
export const  {increment, decerement,reset} = counterSlice.actions;
export default counterSlice.reducer