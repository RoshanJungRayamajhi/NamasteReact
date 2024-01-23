import React, { useContext } from 'react'
import { CONSTURL } from '../utilis/constant'
import { Link } from 'react-router-dom'
import userContext from '../utilis/userContext'


const Card = ({value}) => {
  const {loggedInuser}= useContext(userContext)
   const{name,avgRating,cuisines,cloudinaryImageId} = value?.info
  return (
    <Link to={"/resturants/"+value.info.id} className=' hover:scale-90 duration-300 w-[23%] rounded-md p-1 flex flex-col justify-start overflow-hidden'>
        <div className=' bg-blue-50 '>
            <img className=' w-full h-[25vh] bg-center bg-cover rounded-md' src={ CONSTURL + cloudinaryImageId } alt="" />
        </div>
        <h2>{name}</h2>
        <h3 className='flex'><span className=' inline-block px-3 h-full'>{avgRating} Star</span> {value.info.sla.slaString} </h3>
       
        <h4 className=' w-[100%] '>{cuisines.join(",")}</h4>
       <h4>user:{loggedInuser}</h4>
    </Link>
  )
}

export default Card