import { useEffect } from "react";
import { addupcommingmovie } from "../utilis/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilis/constant";


  export const useUpcommingmovie = ()=>{
    const upcommingmovie = useSelector(store=>store.movies.upcommingmovie)
    const dispatch = useDispatch();
    const getnowplaying = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
      const json = await data.json();
     dispatch(addupcommingmovie(json.results))
    }
    useEffect(()=>{
    !upcommingmovie &&getnowplaying();
    },[])
 }