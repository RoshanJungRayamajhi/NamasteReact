import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowplayingmovie:null,
        tailervideo:null,
    },
    reducers:{
        addnowplayingmovie:(state,action)=>{
              state.nowplayingmovie = action.payload;
        },
        addtailer:(state,action)=>{
            state.tailervideo = action.payload;
        }
    }
})
export const {addnowplayingmovie,addtailer} = movieSlice.actions;
export default movieSlice.reducer;