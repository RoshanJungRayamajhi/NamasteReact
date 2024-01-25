import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {auth} from "../utilis/firebase"
import { adduser,removeuser } from '../utilis/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { BackgroundImage } from '../utilis/constant';





const Login = () => {

  const navigate = useNavigate();
const dispatch =useDispatch();

  return (
    <div>
        <Header/>
        <div className=' w-full h-screen'>
            <img className=' w-full h-screen object-cover object-center' src={BackgroundImage} alt="bgimage" />
        </div>
        
    </div>
  )
}

export default Login