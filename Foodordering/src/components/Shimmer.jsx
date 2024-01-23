import React from 'react'
import Skeleton from 'react-loading-skeleton';

const Shimmer = () => {
  return (<div className=' flex gap-4'>
   <div className='mt-3 mx-3 w-40 h-[30vh] bg-zinc-300 '>cards</div>
    <div className='mt-3 mx-3 w-40 h-[30vh] bg-zinc-300 '>cards</div>
    <div className='mt-3 mx-3 w-40 h-[30vh] bg-zinc-300 '>cards</div>
    <div className='mt-3 mx-3 w-40 h-[30vh] bg-zinc-300 '>cards</div>
  </div>
   )
}

export default Shimmer