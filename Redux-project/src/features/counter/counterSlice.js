import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState : {count:0,step:1},
    reducers:{
        increment:(state) => {
            state.count += state.step;
        },
        decrement:(state) => {
            state.count -= state.step;
        },
        handleInput:(state,actions) => {
            state.step = actions.payload;
        }
    }
})

export const {increment,decrement,handleInput} = counterSlice.actions;

export default counterSlice;