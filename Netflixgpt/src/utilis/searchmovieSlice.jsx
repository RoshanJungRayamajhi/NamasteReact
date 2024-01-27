import { createSlice } from "@reduxjs/toolkit";


const searchmovieSlice = createSlice({
    name:"searchmovie",
    initialState:{
        movies:null,
        names:null
    },
    reducers:{
        addsearchmovies:(state,action)=>{
             state.movies = action.payload
        },
        addtheirnames:(state,action)=>{
            state.names = action.payload
        },
        removemovies:(state,action)=>{
            state.movies =null
            state.names = null
        }
    }
})

export const {addsearchmovies,addtheirnames,removemovies} = searchmovieSlice.actions
export default searchmovieSlice.reducer