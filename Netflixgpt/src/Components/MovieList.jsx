import React, { useState } from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title,movies}) => {
  return (
    <>
    <h1 className=' px-5 text-2xl mix-blend-normal bg-transparent text-white'>{title}</h1>
    <div className='scroll flex gap-6 flex-shrink-0 p-5 overflow-x-scroll'>
      
      <div  className="flex" >{movies && movies.map((movie,index)=> <MovieCards key={index} posterpath={movie.poster_path}/>)}</div>    </div>
    
    </>
  )
}

export default MovieList