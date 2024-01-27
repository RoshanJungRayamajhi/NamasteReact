import { useEffect } from "react";
import { addnowplayingmovie, addpopularmovie, addtopratedmovie } from "../utilis/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilis/constant";


  export const usetopratedmovie = ()=>{
    const topratedmovie = useSelector(store=>store.movies.topratedmovie)
    const dispatch = useDispatch();
    const getnowplaying = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
      const json = await data.json();
     dispatch(addtopratedmovie(json.results))
    }
    useEffect(()=>{
    !topratedmovie && getnowplaying();
    },[])
 }