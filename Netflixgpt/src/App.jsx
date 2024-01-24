import React, { useEffect } from 'react'
import Body from "./Components/Body"
import { Route, Routes, useNavigate } from 'react-router-dom'
import Browse from './Components/Browse'
import Login from './Components/Login'
import { onAuthStateChanged } from "firebase/auth";
import  {auth} from "./utilis/firebase"
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from './utilis/userSlice'
import Header from './Components/Header'

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  return (
   <>
   
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/browse' element ={<Browse/>}/>
   </Routes>
    
   
   </>
  )
}

export default App