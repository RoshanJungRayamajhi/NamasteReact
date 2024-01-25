import React, { useEffect } from 'react'

import Browseheader from './Browseheader';
import { useNowplayingMOvie } from '../Hooks/useNowplayingMovie';
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import { usetopratedmovie } from '../Hooks/usetopratedmovie copy';
import { usePopularmovie } from '../Hooks/usePopularmovie copy';
import { useUpcommingmovie } from '../Hooks/useUpcommingmovie';

const Browse = () => {
 useNowplayingMOvie()
 usetopratedmovie();
 usePopularmovie();
 useUpcommingmovie();
  return (
<div className=' overflow-x-hidden overflow-y-hidden select-none relative'>
  
  <div className=' w-full h-fit'>
  <MainContainer/>
    <Browseheader/>  
  </div>
   <div className=' relative'>
   <SecondaryContainer/>
   </div>

  
    </div>
    
    
  )
}

export default Browse