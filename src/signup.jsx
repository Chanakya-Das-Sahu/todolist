import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import "./App.css"
const Signup = () => {
const [signup,setSignup]=useState({uname:"",mono:"",email:"",pass:"",cpass:""})
// const [isSignup,setIsSignup]=useState(false)
const navigate = useNavigate()

const handleInput =(e)=>{
setSignup({...signup,[e.target.name]:e.target.value})
}
  const Check = async()=>{
    if(signup.uname==""||signup.mono==""||signup.email==""||signup.pass==""||signup.cpass=="")
    alert("please fill the blanks")
  else if(signup.pass!=signup.cpass)
  alert("please check confirm password")
  else{
    try {
      console.log("check")
      // alert("You have done signup successfully")
      await axios.post('http://localhost:3000/api/setData',signup)
      navigate("/login")
    } catch (error) {
      console.log("check",error)
    }
   
  }
    }

  return (
    <>
    <div id="Scontainer">
      <h1 style={{color:'rgb(255 223 0)'}}>Signup page</h1>  
      
      <div><label>Username : </label><br/>
      <input type='text' placeholder='Enter your username' value={signup.uname} name='uname'
      onChange={handleInput}/><br/><br/>
     </div>

      <div><label>Mobile No. : </label><br/>
      <input type='tel' placeholder='Enter your Mo. No.' value={signup.mono} name='mono'
      onChange={handleInput}/><br/><br/>
     </div>

      <div><label>Email : </label><br/>
      <input type='email' placeholder='Enter your email' value={signup.email} name='email'
      onChange={handleInput}/><br/><br/>
     </div>

      <div><label>Password : </label><br/>
      <input type='password' placeholder='Enter your password' value={signup.pass} name='pass'
      onChange={handleInput}/><br/><br/>
     </div>

      <div><label>Confirm Password : </label><br/>
      <input type='password' placeholder='Confirm password' value={signup.cpass} name='cpass'
      onChange={handleInput}/><br/><br/>
     </div>

      <button onClick={Check}>Signup</button>
      
  </div>
    </>
  )
}

export default Signup
