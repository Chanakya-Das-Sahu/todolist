import React, { useState } from 'react'
import "./App.css"
const Note = (props) => {
    // const [note,setNote]=useState(props.compo)
  return (
   <>
   <div id="Ncontainer">
    <h1 style={{textAlign:'center'}}>NotesApp</h1>
    <button>+</button>
    {console.log('props are',props)}
   {/* <h1>{props}</h1> */}
    </div>
   </>
  )
}

export default Note ;
