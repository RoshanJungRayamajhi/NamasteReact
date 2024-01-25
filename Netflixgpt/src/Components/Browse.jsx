import React, { useEffect } from 'react'

import Browseheader from './Browseheader';
import { useNowplayingMOvie } from '../Hooks/useNowplayingMovie';
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
 useNowplayingMOvie()
  return (
<div className=' overflow-x-hidden overflow-y-auto select-none'>
  
    <Browseheader/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
    
    
  )
}

export default Browse