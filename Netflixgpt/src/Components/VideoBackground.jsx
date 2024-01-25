import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";


import { addtailer } from "../utilis/movieSlice";
import { API_OPTIONS } from "../utilis/constant";
import { usePlayingTrailer } from "../Hooks/usePlayingTrailer";

const VideoBackground = ({ movieId }) => {

   const key =useSelector((store)=>store.movies?.tailervideo?.key)
   console.log(key)
   usePlayingTrailer(movieId)
 
   

   
  return (
    <div className=" w-screen h-[100vh] overflow-y-auto overflow-x-hidden">
      <iframe  className="w-screen aspect-video " src={"https://www.youtube.com/embed/"+key+"?si=igl2eT-Fb2gD6e2b"+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};

export default VideoBackground;
