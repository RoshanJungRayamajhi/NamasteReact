import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";


import { addtailer } from "../utilis/movieSlice";
import { API_OPTIONS } from "../utilis/constant";
import { usePlayingTrailer } from "../Hooks/usePlayingTrailer";

const VideoBackground = ({ movieId }) => {

   const key =useSelector((store)=>store.movies?.tailervideo?.key)

   usePlayingTrailer(movieId)
 
   

   
  return (
    <div className=" w-full h-screen">
    <iframe 
  className="w-full h-screen" 
  src={`https://www.youtube.com/embed/${key}?playlist=${key}&mute=1&controls=0&modestbranding=1&autoplay=1&loop=1`} 
  title="YouTube video player"
  allow="autoplay; encrypted-media"
  allowFullScreen
/>   </div>
//     <div className=" aspect-video overflow-y-hidden overflow-x-hidden ">
//      {/* <iframe className="w-screen h-full aspect-video pointer-events-none " src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1`} title="YouTube video player"></iframe> */}
     



//     </div>
  );
};

export default VideoBackground;
