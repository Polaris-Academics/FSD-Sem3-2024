import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import todoSlice from "../features/todo/todoSlice";
import darkModeSlice from "../features/darkMode/darModeSlice";
import fetchSlice from "../features/fetchData/fetchSlice";

const store = configureStore({
    reducer:{
        myCounter:counterSlice.reducer,
        myTodo:todoSlice.reducer,
        myDarkMode:darkModeSlice.reducer,
        myFetchPosts:fetchSlice.reducer
    }
})

export default store;