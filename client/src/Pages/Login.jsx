import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    let Navigate=useNavigate();
    let [state1,updateState1]=useState({email:'',password:''});
    let inputEvent=(e)=>{
        updateState1({...state1, [e.target.name]:e.target.value})
        // console.log(state1);
    }
    let SubmitEvent=async(e)=>{
        try {
            
        e.preventDefault();
        let {email,password}=state1;
        let val=await fetch("/login",{
            method:"POST",
            headers:{ 
                "content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        let val2=await val;
        console.log(val2);
        // console.log(val2.body);
        // console.log(val2.data);
        // console.log(val.data);
        if (val2.status===200) {
        //    let val=await axios.get(`/user/user/${email}`) 
           localStorage.setItem("user_admin",JSON.stringify(email));     
           Navigate('/upload');
        }
        else
        {
            alert("Wrong email and password details")
        }
    } catch (error) {
        alert(error)
            
    }
    }
  return (
    <div className='Signup'>
        <form action="POST">
            <h1>Login</h1>
            <input onChange={inputEvent} type="email" name="email" placeholder='email' id="email" />
            <input onChange={inputEvent} type="password" name="password" placeholder='password' id="password" />
            <input onClick={SubmitEvent} type="submit" value="Login" id="Register" />
            {/* <h6>Don't have an account?</h6>
            <NavLink to="/signup"> Register here</NavLink> */}
        </form>
    </div>
  )
}

export default Login;