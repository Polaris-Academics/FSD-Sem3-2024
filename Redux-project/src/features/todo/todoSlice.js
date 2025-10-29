import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState:{task:'',todos:[]},
    reducers:{
        handleInput:(state,actions) => {
            state.task = actions.payload;
        },
        addTodo:(state) => {
            state.todos.push(state.task);
        },

    }
})

export const {handleInput,addTodo} = todoSlice.actions;

export default todoSlice;