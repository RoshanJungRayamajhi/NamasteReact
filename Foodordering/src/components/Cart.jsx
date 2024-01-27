import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemsList from './ItemsList'
import Shimmer from './Shimmer'
import { clearItems } from '../utilis/cartSlice'


const Cart = () => {
 const dispatch= useDispatch()
 const clearhdlr = ()=>{
   dispatch(clearItems());
 }
  const cartItems1 = useSelector((store)=>store.cart.items)
 
  return (
    <div className=' max-w-screen-md mx-auto text-center'>
      <h1 className=' text-3xl '> Cart</h1>
      <button onClick={clearhdlr}>Clearcart</button>
      {cartItems1.length === 0 && (<h1>add some product here </h1>)}
      {cartItems1.map((items,i)=> <ItemsList lol={true} data={items} />)  }
    </div> 
  )
}

export default Cart