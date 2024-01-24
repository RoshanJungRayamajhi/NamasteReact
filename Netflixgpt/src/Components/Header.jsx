import React, { useRef, useState } from "react";
import { checkvalidatedata } from "../utilis/validation";
import {auth} from "../utilis/firebase"
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../utilis/userSlice";

const Header = () => {

  const [isSigninform, setisSigninform] = useState(true);
  const [Errormessage, setErrormessage] = useState("")
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const navigate=  useNavigate();
  const dispatch = useDispatch()
  
  
  const togglehandler = () => {
    setisSigninform(!isSigninform);
  };
  
  const validationhandler = () => {
    
    const Returnfromvalidation=checkvalidatedata(email.current.value,password.current.value)
    
    setErrormessage(Returnfromvalidation)
    //Returnfromvalidation ma k k aauna sakxa ta invalid password /invalid email / null auna sakxa 
    // null sab ko  true vako bela ma aauxa // null vane ko false ho ra invalid password /invalid email vane ko true ho yo jamai false vako bela ma aauxa
    // null false ho false vaye paxi return huna ra tala ko sab chalxa
    if(Returnfromvalidation)return;

    if(!isSigninform){
      //Api calling to the firebase
    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
   .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: name.current.value, photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(adduser({ uid:uid, email:email,displayName:displayName,photoURL:photoURL}))
      
      // Profile updated!
      // ...
      navigate("/browse")
    }).catch((error) => {
      setErrormessage(error.message)
      // An error occurred
      // ...
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   setErrormessage(errorCode +"-"+ errorMessage)
  });

    }
    else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormessage(errorCode +"-"+ errorMessage)
      });
   
   
    
    }
    
   
    };
  return (
    <>
   
      <div className=" w-full h-screen absolute">
        <div className=" bg-[#000000] opacity-[75%] bg-gradient-to-b from-black absolute w-full h-screen "></div>
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt="netflix logo"
          className=" absolute w-24 sm:w-40 m-4"
        ></img>
      </div>
        <div className=" p-[2.8%] w-[30vw] h-[60vh] bg-black opacity-80 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <form className=" flex flex-col" onSubmit={(e)=>e.preventDefault()}>
            <label className="mb-8 text-3xl font-bold text-white">
              {isSigninform ? "Sin In" : "Sin Up"}
            </label>
            {!isSigninform && (
              <input
                className="text-[20px] mb-4 font-semibold px-3 py-2 bg-[#374151] rounded-md"
                type="text"
                placeholder="Full Name"
                ref={name}
              />
            )}
            <input
            ref={email}
              className=" text-white text-[20px] font-semibold px-3 py-2 bg-[#374151] rounded-md"
              type="text"
              placeholder="Email"
            />
            <input
            ref={password}
              className="  text-white text-[20px] font-semibold mt-6 px-3 py-2 bg-[#374151] mb-8 rounded-md"
              type="password"
              placeholder="Password"
            />
            {Errormessage && <p className=" text-xl text-white font-semibold mb-4">{Errormessage}</p>}
            <button
              onClick={validationhandler}
              className={`${
                isSigninform ? "bg-red-500" : "bg-green-500"
              } px-2 py-3 rounded-md text-white`}
            >
              {isSigninform ? "Sin In" : "Sin Up"}
            </button>
            <h3 className="text-white mt-6 text-[16px]">
              {isSigninform ? "New to Netflix?" : "SinIn Now"}
              <span
                onClick={togglehandler}
                className=" cursor-pointer text-red-600"
              >
                {isSigninform ? "Sin Up" : "😃"}
              </span>
            </h3>
          </form>
        </div>
    </>
  );
};

export default Header;
