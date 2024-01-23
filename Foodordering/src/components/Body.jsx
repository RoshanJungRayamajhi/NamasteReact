import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import Header from "./Header";
import useOnlinestatus from "../utilis/useOnlinestatus";
import Online from "./Online";
import userContext from "../utilis/userContext";



const Body = () => {
  const{ loggedInuser,setusername}=useContext(userContext)
  
    const [product, setproduct] = useState();
   
  const [search, setsearch] = useState("")
  const [filter, setfilter] = useState()
  
    const fetchdata = async()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      // console.log(json)
      setproduct(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilter(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // console.log(product)
    useEffect(() => {
     fetchdata();
    },[])
    const onlinestatus1 = useOnlinestatus();
   
    return (<>
    {onlinestatus1 ? <>
    <div className="search m-3 ">
      <input className=" border-zinc-700  border-2 rounded-md" type="text" value={search} onChange={(e)=>setsearch(e.target.value)} />
     <button onClick={()=>{
      const filterproduct =product.filter(items=>items.info.name.toLowerCase().includes(search.toLowerCase()))
      setfilter(filterproduct)
     }}>Search</button>
     <label className="mx-10">username</label>
     <input className=" border border-black" type="text" value={loggedInuser} onChange={(e)=>setusername(e.target.value)} />
    </div>
  
  
  
  
  
   
    { product ? <>
    <div className="filter m-4 ">
        <button onClick={()=>setproduct((product.filter(i=>i.info.avgRating>4.3)))} className=" px-2 py-2 bg-gray-600 text-white">Top Rated Resturant</button>
      </div>
      <div className=" w- full  bg-blue-100 py-10 flex flex-wrap flex-shrink-0 gap-7">
       {filter.map((items,index)=> <Card key={items.info.id} value={items}/>)}
       
  
      </div> 
      </>
      : <Shimmer/> }</>:<Online/>}
      </> 
    )
}

export default Body