import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import todoSlice from "../features/todo/todoSlice";
import darkModeSlice from "../features/darkMode/darModeSlice";
import fetchSlice from "../features/fetchData/fetchSlice";
import logger from "../redux_middlewares/logger";

const store = configureStore({
    reducer:{
        myCounter:counterSlice.reducer,
        myTodo:todoSlice.reducer,
        myDarkMode:darkModeSlice.reducer,
        myFetchPosts:fetchSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;