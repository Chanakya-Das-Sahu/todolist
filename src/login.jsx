import React, { useState } from 'react'
import axios from 'axios'
import "./App.css"
const Login = () => {
const [login,setLogin] = useState({em:"",pass:""})

const loginInput =(e)=>{
setLogin({...login,[e.target.name]:e.target.value})
}
const loginHandle = async ()=>{
try {
  console.log("loginhandle")
 const response= await axios.post('http://localhost:3000/api/getData',login)
 console.log("loginhandle",response)


} catch (error) {
  console.log("loginhandle ",error)
}
}

  return (
    <>
      <div id="Lcontainer">
        <h1 style={{color:'#097e09'}}>Login Page</h1>
        <div>
          <label>Email :</label><br/>
          <input type='email' placeholder='Enter your email' onChange={loginInput}
          value={login.em} name="em"/><br/><br/>
        </div>
        <div>
          <label>Password :</label><br/>
          <input type='password' placeholder='Enter your password' onChange={loginInput}
          value={login.password} name="pass"/><br/><br/>
        </div>
        <button onClick={loginHandle}>Login</button>
      </div>
    </>
  )
}

export default Login
