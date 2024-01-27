import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilis/constant";
import { addtailer } from "../utilis/movieSlice";
import { useEffect } from "react";



export const usePlayingTrailer = (movieId)=>{
  const playingtrailer = useSelector(store=>store.movies.tailervideo)
    const dispatch = useDispatch();
   const getmovievideo = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    API_OPTIONS
  );
  const json = await data.json();
  const tailer = json.results.filter(
    (video, i) =>
      video.type === "Trailer"
  );
  const filtertailer = tailer ? tailer[0] : json.results[0];
   dispatch(addtailer(filtertailer))
 

};
useEffect(() => {
 !playingtrailer && getmovievideo();
}, []);
}