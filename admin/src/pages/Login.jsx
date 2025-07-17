import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from 'axios'
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  const [state, setState] = useState("Admin");
  const {setAToken,backendUrl}=useContext(AdminContext)
  const {setDToken}=useContext(DoctorContext)

  const[email,setEmail]=useState('')
  const [password,setpassword]=useState('')
   
   const fillGuestCredentials = () => {
    if (state === "Admin") {
      setEmail("admin@prescripto.com");
      setpassword("qwerty123");
    } else {
      setEmail("richard@prescripto.com");
      setpassword("qwerty123");
    }
  };


  const onSubmitHandler=async(event)=>{
    event.preventDefault()
    try {
       if(state==='Admin'){
        const {data}=await axios.post(backendUrl+'/api/admin/login',{email,password})
        if(data.success){
            localStorage.setItem('aToken',data.token)
            setAToken(data.token)
            navigate('/admin-dashboard')
            //console.log(data.token)

        }else{
            toast.error(data.message)
        }
       }else{
        const {data}=await axios.post(backendUrl+'/api/doctor/login',{email,password})
        if(data.success){
            localStorage.setItem('dToken',data.token)
            setDToken(data.token)
            navigate('/doctor-dashboard')
            //console.log(data.token)
        }else{
            toast.error(data.message)
        }
       } 
    } catch (error) {
        
    }
  }



  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center ">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold  m-auto">
          <span className="text-primary">{state} </span>Login
        </p>

        <div className="w-full">
          <p>Email</p>
          <input onChange={(e)=>setEmail(e.target.value)} value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1 "
            type="email"
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input  onChange={(e)=>setpassword(e.target.value)} value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1 "
            type="password"
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          Login
        </button>
        {/* Guest Credentials Button */}
        <button
          type="button"
          className="bg-gray-300 text-black w-full py-2 rounded-md text-sm mt-2"
          onClick={fillGuestCredentials}
        >
          Use Guest {state} Credentials
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login? <span className="text-primary underline cursor-pointer" onClick={()=>setState('Doctor')}>Click here</span>
          </p>
        ) : (
          <p>
            Admin Login? <span className="text-primary underline cursor-pointer" onClick={()=>setState('Admin')}>Click here</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
