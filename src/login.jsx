import React from 'react'
import "./App.css"
const Login = () => {
  const login 
  return (
    <>
      <div id="Lcontainer">
        <h1 style={{color:'#097e09'}}>Login Page</h1>
        <div>
          <label>Email :</label><br/>
          <input type='email' placeholder='Enter your email'/><br/><br/>
        </div>
        <div>
          <label>Password :</label><br/>
          <input type='password' placeholder='Enter your password'/><br/><br/>
        </div>
        <button onClick={loginHandle}>Login</button>
      </div>
    </>
  )
}

export default Login
