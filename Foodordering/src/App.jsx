import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import {Restaurants} from "./utilis/contant"
import Shimmer from "./components/Shimmer";
import { Outlet, Route, Routes } from "react-router-dom";


import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Resturantmenu from "./components/Resturantmenu";
import userContext from "./utilis/userContext";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";
import Cart from "./components/Cart";

const App = () => {
  const [username, setusername] = useState()
  useEffect(()=>{
    const data ={
      name:"Roshan jung"
    }
    setusername(data.name);
  },[])

 
  return (<>
  <Provider store={appStore}>
  <userContext.Provider value={{loggedInuser:username,setusername}}>

 
   <Header/>
   
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/resturants/:id" element={<Resturantmenu/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>

    </Routes>
    </userContext.Provider>
    </Provider>
    </>
  )
};

export default App;
