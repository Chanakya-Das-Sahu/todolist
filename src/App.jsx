import React, { useEffect, useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';
import './App.css';
const App = () => {
  const [item, setItem] = useState("")
  const [itemlist, setItemlist] = useState([])
  const AddItem = () => {
    setItemlist([...itemlist, item])

    setItem("")

  }
    const addByE=(e)=>{
  if(e.key=="enter"){
    setItemlist([...itemlist,item])

    setItem("")
  }
    }

  return (
  <>
      <div id="inputField">

        <input type="text" placeholder='Write here' value={item}
          onChange={(event) => { setItem(event.target.value)  }}onKeyPress={addByE} />

        <button onClick={AddItem}>Add</button>
      </div>
      <div id="showItem">
        {

        itemlist.map((item) => (
          
           <div className='taskBar'>
            <div>{item}</div><div><MdOutlineEdit size="1.5rem" onClick={editItem}/>
            &nbsp;&nbsp;&nbsp;<MdDeleteOutline size="1.5rem" onClick={deleteItem}/></div>
            </div>
 
      ) )}
          </div>
        
  </>
      )
}




      export default App;