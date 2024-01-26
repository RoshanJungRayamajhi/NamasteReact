import { createSlice } from "@reduxjs/toolkit";


const GptSlice = createSlice({
    name:"GPT",
    initialState:{
       showGptsearch:false,
    },
    reducers:{
        tooglegptsearchview:(state,action)=>{
        state.showGptsearch = !state.showGptsearch;
        },
    }
})
export const {tooglegptsearchview} = GptSlice.actions
export default GptSlice.reducer