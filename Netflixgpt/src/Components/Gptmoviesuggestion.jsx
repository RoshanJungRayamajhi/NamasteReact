import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieList from './MovieList';
import { removemovies } from '../utilis/searchmovieSlice';

const Gptmoviesuggestion = () => {
  const dispatch =  useDispatch()
    const {movies,names} = useSelector(store=>store.searchmovie)
    if(!names && !movies )return null;
  return (
   <div className=' w-full h-fit absolute top-[50vh] left-0 bg-transparent overflow-hidden'>
   {names && names.map((name,i)=><MovieList key={name} title={name} movies={movies[i]} />)}
   
   </div>
  )
}

export default Gptmoviesuggestion