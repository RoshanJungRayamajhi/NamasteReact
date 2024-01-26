import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice";
import GptReducer from "./GptSlice";
import languageReducer from "./languageSlice"

  const appstore = configureStore({
    reducer:{
      user: userReducer,
      movies: movieReducer,
      Gpt:GptReducer,
      language: languageReducer,
    },
})

export default appstore