import React from 'react'
import MovieList from './MovieList'
import { useSelector } from "react-redux"

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <div className=' w-full h-min-[100vh] bg-black mt-[-15%]'>
      <MovieList title={"Now playing"} movies ={movies.nowplayingmovie} />
      <MovieList title={"Popular"} movies ={movies.popularmovie} />
      <MovieList title={"topratedmovie"} movies ={movies.topratedmovie} />
      <MovieList title={"upcommingmovie"} movies ={movies.upcommingmovie} />
     
    </div>
  //  movie list popular/trending - movie cards
  )
}

export default SecondaryContainer