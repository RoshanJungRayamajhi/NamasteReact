import React, { useState } from 'react'
import ItemsList from './ItemsList'

const ResturantCategory = ({value,click ,setshowindex}) => {
// const [daba, setdaba] = useState(click)
  const [arrow, setarrow] = useState(true)
   
  return (
    <div className=' max-w-screen-xl mx-auto bg-white  shadow-lg cursor-pointer'>
        <div  onClick={()=>{
          setshowindex();
         
        setarrow(!arrow)}} className='flex items-center justify-between px-6 my-2 rounded-md py-3'><span className=' font-bold text-2xl'>{value.title} ({value.itemCards.length})</span>
       { arrow? <span>⬆️</span>: <span>⬇️</span>}</div>
      {click && value?.itemCards.map((product,i)=> <ItemsList key={product.card.info.name} data={product}/>)}
      {/* {daba && value?.itemCards.map((product,i)=> <ItemsList key={product.card.info.name} data={product}/>)} */}
    </div>
  )
}

export default ResturantCategory