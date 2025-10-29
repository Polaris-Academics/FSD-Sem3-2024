import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import todoSlice from "../features/todo/todoSlice";

const store = configureStore({
    reducer:{
        myCounter:counterSlice.reducer,
        myTodo:todoSlice.reducer
    }
})

export default store;