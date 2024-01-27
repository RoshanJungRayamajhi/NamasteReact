import { useEffect } from "react";
import { addnowplayingmovie } from "../utilis/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilis/constant";


  export const useNowplayingMOvie = ()=>{
    const nowplaying = useSelector(store=>store.movies.nowplayingmovie)
    const dispatch = useDispatch();
    const getnowplaying = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const json = await data.json();
     dispatch(addnowplayingmovie(json.results))
    }
    useEffect(()=>{
    !nowplaying && getnowplaying();
    },[])
 }