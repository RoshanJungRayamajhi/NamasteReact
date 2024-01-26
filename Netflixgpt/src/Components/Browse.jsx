import React, { useEffect } from 'react'

import Browseheader from './Browseheader';
import { useNowplayingMOvie } from '../Hooks/useNowplayingMovie';

import SecondaryContainer from "./SecondaryContainer"
import { usetopratedmovie } from '../Hooks/usetopratedmovie copy';
import { usePopularmovie } from '../Hooks/usePopularmovie copy';
import { useUpcommingmovie } from '../Hooks/useUpcommingmovie';
import GPTsearch from './GPTsearch';
import { ImgUrl } from '../utilis/constant';
import VideoBackground from './VideoBackground';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';

const Browse = () => {
 const result = useSelector((store)=>store.Gpt?.showGptsearch)
 useNowplayingMOvie()
 usetopratedmovie();
 usePopularmovie();
 useUpcommingmovie();
  return (
    <> 
       <div className=' relative '>
        <Browseheader/>
        {result ?  <GPTsearch/> : <>
        <MainContainer/>
    <SecondaryContainer/>        
        </>}
       
     
    </div>




















    </>

  )
}

export default Browse


{/* <div className=' overflow-x-hidden overflow-y-hidden select-none relative'>
  
  <div className=' w-full h-fit'>
  <MainContainer/>
    <Browseheader/>  
    <GPTsearch/>
  </div>
   <div className=' relative'>
   <SecondaryContainer/>
   </div>

  
    </div>
    
  */}
//   <div className='absolute top-0 left-0 w-full h-[15vh] bg-gradient-to-b from-black flex items-center justify-between p-4'>
//   <img
//     src={ImgUrl}
//     alt="netflix logo"
//     className="w-24 sm:w-40 m-4"
//   ></img>
//   <button className=' px-3 py-2 bg-red-400 text-white'>GPT search</button>
//    <div className='flex items-center gap-8'>
//     <> <h3 className=' text-xl'>Roshan</h3> 
//   <img className=' w-7 h-8 rounded-full'  src="" alt="" /></>
//    <button className=' px-3 py-2 bg-red-400 rounded-md'>Sin out</button>
//    </div> 
// </div>