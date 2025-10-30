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
            state.task='';
        },
        deleteTodo:(state,actions) => {
            state.todos = state.todos.filter((_,i) => i!=actions.payload)
        }

    }
})

export const {handleInput,addTodo,deleteTodo} = todoSlice.actions;

export default todoSlice;