import React from 'react'
import Body from "./Components/Body"
import { Route, Routes } from 'react-router-dom'
import Browse from './Components/Browse'
import Login from './Components/Login'

const App = () => {
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