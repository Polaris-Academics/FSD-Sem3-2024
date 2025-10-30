import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('fetchData/fetchPosts',async (input,_)=>{
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const res = await data.json();
    return res;
})

const fetchSlice = createSlice({
    name:'fetchData',
    initialState:{items:[],isLoading:true,isError:false},
    reducers:{
        clearPosts: (state) => {
            state.items=[];
        }
    },
    extraReducers:(builder) => {
        builder.
            addCase(fetchPosts.pending, (state) => {
                state.isLoading=true;
            })
            .addCase(fetchPosts.fulfilled , (state,actions) => {
                state.isLoading=false;
                state.items = actions.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.isLoading=false;
                state.isError = true;
            })
    }
})

export const {clearPosts} = fetchSlice.actions;

export default fetchSlice;