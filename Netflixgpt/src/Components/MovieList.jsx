import React, { useState } from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title,movies}) => {
  const [position, setPosition] = useState(0);
  const movehandler =()=>{
    setPosition((prevPosition) => prevPosition - 10);

  }

  return (
    <>
    <h1 className=' px-5 text-2xl mix-blend-normal bg-transparent text-white'>{title}</h1>
    <div className=' flex gap-6 flex-shrink-0 p-5 relative'>
      
      <div  className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${position}%)` }} >{movies && movies.map((movie,index)=> <MovieCards key={index} posterpath={movie.poster_path}/>)}</div>
  <button onClick={movehandler} className=' h-10 w-10 rounded-full bg-zinc-500 absolute top-[50%] right-0 -translate-y-[50%]  '> ▶️</button>
    </div>
    
    </>
  )
}

export default MovieList