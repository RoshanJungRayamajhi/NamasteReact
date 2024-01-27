import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
 
  const movies = useSelector((store)=>store.movies?.nowplayingmovie)
  if(!movies)return;
 const mainMovies = movies[0];
 const {original_title,overview,id }=mainMovies
  return (
    <>
    <VideoBackground movieId={id}/>
    <VideoTitle  title={original_title} overview={overview} />
    </>
    
  )
}

export default MainContainer