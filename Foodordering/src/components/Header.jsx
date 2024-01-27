import React, { useContext, useState } from 'react'
import About from './About'
import useOnlinestatus from '../utilis/useOnlinestatus'
import { Link } from 'react-router-dom';
import userContext from '../utilis/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
  
  const [btn, setbtn] = useState(true);
  const onlinestatus=useOnlinestatus();
  const {loggedInuser} = useContext(userContext);
  const cartItems = useSelector((store)=>store.cart.items)
 =
  
  return (
    <div className=' w-full h-[20vh] flex items-center justify-between px-20'>
        <div className='text-4xl font-bold'>swigggy</div>
      
        <div className=' flex gap-6 items-center'>
          <h1>onlinestatus {onlinestatus ?"✅":"🔴"}</h1>
            <h1>about</h1>
            <Link to="/">home</Link>
            <h1>contact</h1>
            <Link to="/cart">Cart ({cartItems.length}items)</Link>
            <button onClick={()=>setbtn(!btn)} className=" px-3 py-2 bg-green-400">{btn? "login":"logout"}</button>
            <h1 className=' font-semibold text-lg'>{loggedInuser}</h1>
        </div>
    </div>
  )
}

export default Header