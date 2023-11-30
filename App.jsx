
import './App.css'
import React from 'react'
import { useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
const App = () => {
  const [selectPage,setselectPage]=useState(true);
  const togglePage=()=>{
    setselectPage((prev)=>!prev);
  }
  return (
    <>{selectPage?<Signup toggle={togglePage}/> : <Login toggle={togglePage}/>}
    </>
  )
}
export default App
