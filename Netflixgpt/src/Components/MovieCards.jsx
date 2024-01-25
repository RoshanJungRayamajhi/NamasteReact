import React from 'react'
import { IMG_CDN } from '../utilis/constant'

const MovieCards = ({posterpath}) => {
    
  return (
 <div className=''>
       <div className=' w-[14vw] h-[30vh] rounded-md'>
        <img className=' w-full h-full ' src={IMG_CDN + posterpath} alt="MOvieCard" />
    </div>

 </div>
  )
}

export default MovieCards