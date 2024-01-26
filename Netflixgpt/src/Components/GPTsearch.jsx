import React from 'react'
import { BackgroundImage } from '../utilis/constant'
import { lang } from '../utilis/langConstant'
import { useSelector } from 'react-redux'

const GPTsearch = () => {
  const langkey = useSelector(store=>store.language.lang)
  return (
    <div>
    <div className=' w-full h-screen'>
            <img className=' w-full h-screen object-cover object-center' src={BackgroundImage} alt="bgimage" />
        </div>
      <div className='absolute top-[30%] left-[50%] -translate-x-[50%] bg-black p-3'>
        <input className=' w-[35vw] h-[6vh] rounded-md text-gray-800 px-2 text-xl' type="search" placeholder={lang[langkey].gptplaceholder} />
        <button className=' px-3 py-2 bg-green-300 ml-5 rounded-md text-xl'>{lang[langkey].search}</button>
      </div>
    </div>
  )
}

export default GPTsearch