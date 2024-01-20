import React, { useEffect, useState } from 'react';

const App =()=>{
  const [item , setItem]=useState("")
  const [itemlist,setItemlist]=useState([])
  const AddItem =()=>{
   setItemlist([...itemlist,item])
   
    setItem("")
    
  }
 
return(
  <>
  <div id="inputField">
    <input type="text" placeholder='Write here' value={item} 
    onChange={(event)=>{setItem(event.target.value)}}/>
    
    <button onClick={AddItem}>Add</button>
   
  <p> {
 itemlist.map((item)=>{
  return  item 
})
} </p>

</div>
  
  </>
)
}


  

export default App;