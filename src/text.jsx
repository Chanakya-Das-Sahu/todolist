import React, { useState } from 'react'
import './App.css'
import Note from './note'
const Text = () => {
    // const [value,setValue]=useState(2)
    const value = "your";
  return (
  <>
  <textarea id="textField" placeholder='Write here....'></textarea>
  {console.log('text',value)}
  
  <Note/>
  
  </>
  )
}

export default Text
