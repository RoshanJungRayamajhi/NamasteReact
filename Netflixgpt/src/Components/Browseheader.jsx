import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { FaImage } from "react-icons/fa6";
import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  appstore from '../utilis/store';
import { adduser, removeuser } from '../utilis/userSlice';
import { ImgUrl } from '../utilis/constant';

const Browseheader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const user =  useSelector(store=>store.user)
    // console.log(user)

  const handlesinout = ()=>{
    signOut(auth).then(() => {}).catch((error) => {
      // An error happened.
    });
    
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(adduser({ uid:uid, email:email,displayName:displayName,photoURL:photoURL}))
         navigate("/browse")
        // ...
      } else {
        dispatch(removeuser())
       navigate("/")
        // User is signed out
        // ...
      }
    });
    return ()=>unsubscribe();
    
  },[])
  return (
    <>
   <div className='absolute z-[99999] w-full h-[15vh] bg-gradient-to-b from-black flex items-center justify-between p-4 overflow-hidden'>
      <img
        src={ImgUrl}
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