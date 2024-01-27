import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { CONSTURLMENU } from '../utilis/constant'
import ResturantCategory from './ResturantCategory'

const Resturantmenu = () => {
    const [restinfo, setrestinfo] = useState(null)
    const [menu, setmenu] = useState()
    const [showindex, setshowindex] = useState(null)
    const {id}=useParams()
    useEffect(()=>{
        fetchmenu();
    },[])
    const fetchmenu = async()=>{
     const data = await fetch(CONSTURLMENU+id)
     const json =await data.json();
     setrestinfo(json.data);
    }
   
    
    if(!restinfo){
        return <Shimmer/>
    }
    const {name,areaName, cuisines}=restinfo?.cards[0]?.card?.card?.info;

    const {itemCards} = restinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    const catogery = restinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c,i)=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"    )
    
  return (<>
  {restinfo ? ( 
     <div className='text-center'>
        <h1 className=' m-4 text-5xl'>{name}</h1>
        <h2 className=' font-semibold text-2xl' >{areaName}</h2>
        <h2 className=' font-medium text-xl my-3'>{cuisines.join(",")}</h2>
        {catogery.map((item,i)=><ResturantCategory setshowindex={()=>setshowindex(i)} key={item.card.card.title} click={i===showindex && true}   value={item.card.card}/>)}
    </div>): <Shimmer/>}
  </>)
}

export default Resturantmenu