import React, { useState } from 'react'
import './App.css'
import { MdAddBox } from "react-icons/md";

function App() {
  const [task, settask] = useState("");
  const handleClick = () => {

  }
  return <>
    <input type="text" />
    <button onClick={handleClick}><MdAddBox /></button>
  </>
}

export default App;
