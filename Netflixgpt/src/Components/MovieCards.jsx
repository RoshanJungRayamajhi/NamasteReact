import React from 'react'
import { IMG_CDN } from '../utilis/constant'

const MovieCards = ({posterpath}) => {
    
  return (<>
    {posterpath && <><div className=''>
    <div className='w-[40vw] md:w-[14vw] h-[30vh] rounded-md'>
     <img className='w-[40vw] md:w-full h-full ' src={IMG_CDN + posterpath} alt="MOvieCard" />
 </div>

</div></>}
</>
  )
}

export default MovieCards