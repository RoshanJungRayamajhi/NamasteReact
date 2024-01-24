import { signOut } from 'firebase/auth';
import React from 'react'
import { FaImage } from "react-icons/fa6";
import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  appstore from '../utilis/store';

const Browseheader = () => {
  const navigate = useNavigate();
   const user =  useSelector(store=>store.user)
    console.log(user)

  const handlesinout = ()=>{
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <>
   <div className=' w-full h-[15vh] bg-gradient-to-b from-black flex items-center justify-between p-4'>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt="netflix logo"
        className="w-24 sm:w-40 m-4"
      ></img>
       <div className='flex items-center gap-8'>
       {  user && <> <h3 className=' text-xl'>{user.displayName}</h3> 
      <img className=' w-7 h-8 rounded-full'  src={user.photoURL} alt="" /></>}
       <button onClick={handlesinout} className=' px-3 py-2 bg-red-400 rounded-md'>Sin out</button></div> 
    </div>
  </>
  )
}

export default Browseheader