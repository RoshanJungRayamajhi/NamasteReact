import React, { useState } from 'react'

const Header = () => {
    const [isSigninform, setisSigninform] = useState(true);
    const togglehandler =()=>{
        setisSigninform(!isSigninform);

    }
  return (<>
  <div className=' w-full h-screen absolute'>
  <div className=' bg-[#000000] opacity-[75%] bg-gradient-to-b from-black absolute w-full h-screen '>
    </div>
    <img  src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="netflix logo" className=" absolute w-24 sm:w-40 m-4"></img>
   <div className=' p-[2.8%] w-[30vw] h-[60vh] bg-black opacity-80 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
   <form className=' flex flex-col' action="">

        <label className='mb-8 text-3xl font-bold text-white'>{isSigninform?"Sin In":"Sin Up"}</label>
          {!isSigninform &&  <input className='text-[20px] mb-4 font-semibold px-3 py-2 bg-[#374151] rounded-md' type="text" placeholder='Full Name' />}
        <input className=' text-white text-[20px] font-semibold px-3 py-2 bg-[#374151] rounded-md' type="text" placeholder='Email' />
        <input className='  text-white text-[20px] font-semibold mt-6 px-3 py-2 bg-[#374151] mb-8 rounded-md' type="password" placeholder='Password' />
        <button className={`${isSigninform?"bg-red-500":"bg-green-500"} px-2 py-3 rounded-md text-white`}>{isSigninform?"Sin In":"Sin Up"}</button>
        <h3 className='text-white mt-6 text-[16px]'>{ isSigninform ? "New to Netflix?":"SinIn Now" }<span onClick={togglehandler} className=' cursor-pointer text-red-600'>{isSigninform ?"Sin Up":"😃"}</span></h3>
        

    </form>
   </div>
  </div>
    </>)
}

export default Header