import React from 'react'
import Header from './Header'
import Login from './Login'
import Browse from './Browse'
import {auth} from "../utilis/firebase"
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { adduser } from '../utilis/userSlice'
import { removeuser } from '../utilis/userSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


const Body = () => {

  return (
    <>
    <Header/>
    <Login/>
    </>
  )
}

export default Body