import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowplayingmovie:null,
        tailervideo:null,
        popularmovie:null,
        topratedmovie:null,
        upcommingmovie:null,
    },
    reducers:{
        addnowplayingmovie:(state,action)=>{
              state.nowplayingmovie = action.payload;
        },
        addpopularmovie:(state,action)=>{
            state.popularmovie = action.payload;
        },
        addtopratedmovie:(state,action)=>{
          state.topratedmovie = action.payload;
        },
        addupcommingmovie:(state,action)=>{
            state.upcommingmovie = action.payload;
        },
        addtailer:(state,action)=>{
            state.tailervideo = action.payload;
        }
    }
})
export const {addnowplayingmovie,addtailer,addpopularmovie,addtopratedmovie,addupcommingmovie} = movieSlice.actions;
export default movieSlice.reducer;