import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {auth} from "../utilis/firebase"
import { adduser,removeuser } from '../utilis/userSlice';
import { onAuthStateChanged } from 'firebase/auth';





const Login = () => {

  const navigate = useNavigate();
const dispatch =useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(adduser({ uid:uid, email:email,displayName:displayName,photoURL:photoURL}))
        console.log("user is signed in")
       
        // ...
      } else {
        dispatch(removeuser())
       
        console.log("hello")
        // User is signed out
        // ...
      }
    });
    
  },[])
  return (
    <div>
        <Header/>
        <div className=' w-full h-screen'>
            <img className=' w-full h-screen object-cover object-center' src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="bgimage" />
        </div>
        
    </div>
  )
}

export default Login