import React, { useEffect } from 'react'
import { BackgroundImage } from '../utilis/constant'
import { useDispatch, useSelector } from 'react-redux'
import GPTsearchbar from './GPTsearchbar'
import Gptmoviesuggestion from './Gptmoviesuggestion'
import { removemovies } from '../utilis/searchmovieSlice'

const GPTsearch = () => {
  return (
    <div className='relative'>
    <div className=' w-full h-full'>
            <img className=' fixed w-full h-screen object-cover object-center' src={BackgroundImage} alt="bgimage" />
        </div>
    <GPTsearchbar/>
    <Gptmoviesuggestion/>
    </div>
  )
}

export default GPTsearch