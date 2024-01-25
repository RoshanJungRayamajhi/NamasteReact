import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";


const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video h-full bg-gradient-to-r from-black  p-4 absolute  text-white mix-blend-normal'>
      <div className=' absolute w-1/2 top-[40%] left-[8%]'>
      <h1 className=' text-7xl tracking-tighter font-bold my-4'>{title}</h1>
        <p className=' text-xl font-semibold my-4 '>{overview}</p>
       <div className=' flex items-center gap-6'> <button className=' flex items-center justify-between gap-2 px-10  py-2 text-xl font-semibold rounded-md bg-gray-400 text-white hover:bg-gray-500'> <span> <CiPlay1 /></span> <span>Play</span> </button>
        <button className='flex items-center gap-2  px-4 py-2 text-xl font-semibold rounded-md bg-transparent bg-gray-500 text-yellow-50 ' > <span><IoIosInformationCircleOutline />
</span> More Info</button>
        </div>
      </div>
        </div>
  )
}

export default VideoTitle