import React from 'react'
import {useDispatch} from "react-redux"
import {addItems} from "../utilis/cartSlice"
import { CONSTURL } from '../utilis/constant'



const ItemsList = ({data,lol}) => {
  const dispatch = useDispatch()
  const ClickHandler = (e)=>{
    dispatch(addItems(e))

  }
    
  return (<>
    <div className=' mb-3 w-full bg-white flex justify-between items-start px-5 border-b-2 border-zinc-700'>
        <div className='flex flex-col items-start text-start basis-[70%]'>
            <h1 className=' my-1 text-xl font-semibold'>{data?.card?.info?.name}</h1>
            <h2 className='my-1 text-sm font-medium'>Rs{data?.card?.info?.price/100}</h2>
            <p className='mb-6  text-zinc-400'>{data?.card?.info?.description}</p>
        </div>
        <div>
        <div className=' bg-blue-50  '>
            <img className='  w-full h-[16vh] bg-center bg-cover rounded-md' src={CONSTURL+data?.card?.info?.imageId} alt="" />
        <button onClick={()=>ClickHandler(data)} className='  basis-[20%] px-3 py-2 bg-green-300 rounded-md'> {lol ? "added":"add"}</button>
        </div>

        </div>
   


    </div>
        {/* {data.map((i,index)=><h1>{i?.card?.info?.name}</h1>)} */}
        </>
  )
}

export default ItemsList;