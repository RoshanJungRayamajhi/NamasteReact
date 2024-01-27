import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utilis/langConstant'
import {openai} from '../utilis/openai'
import { API_OPTIONS } from '../utilis/constant'
import { addsearchmovies, addtheirnames } from '../utilis/searchmovieSlice'


const GPTsearchbar = () => {
    const dispatch =  useDispatch();
    const langkey = useSelector(store=>store.language.lang)
    const search = useRef(null)
    const searchmovietmdb = async(movie)=>{
        const data1 = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)

        const json = await data1.json();
     return json.results
    }

   
    const clickHandler = async()=>{
    
        const gptquery = "Acts as a movie recommendation system,suggest me only 5"+search.current.value + ".Give me movie title seperated by comma  like the example eg: golmal,dilwale,don,dhoom,bafikre i doesnt need hero name i only need the movies title";
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: 'user', content:gptquery }],
                model: 'gpt-3.5-turbo',
              });
              const movieslist =chatCompletion.choices?.[0]?.message?.content.split(",")
            
            dispatch(addtheirnames(movieslist))
                const promisearray = movieslist.map((movie, i) => searchmovietmdb(movie));
                const tmdbmovies = await Promise.all(promisearray);
                dispatch(addsearchmovies(tmdbmovies))
               
        }
  return (
     <form onSubmit={(e)=>e.preventDefault()} className='fixed z-[999] top-[30vh] md:top-[30vh] left-[2%] md:left-[50%] md:-translate-x-[50%] bg-black p-3'>
        <input ref={search} className=' w-[100%] md:w-[35vw] h-[6vh] rounded-md text-gray-800 px-2 text-xl' type="search" placeholder={lang[langkey].gptplaceholder} />
        <button onClick={clickHandler} className='mt-4 md:mt-0 px-3 py-2 bg-green-300 md:ml-5 rounded-md text-xl ml-[37%]'>{lang[langkey].search}</button>
      </form>
  )
}

export default GPTsearchbar