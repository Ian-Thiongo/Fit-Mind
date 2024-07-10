import { useState } from 'react'
import './App.css'
import Goal from './Components/GoalsPage'
import Profile from './Components/Profile'

function App() {
  return(
    <div className="App">
      <Profile />
     <Goal/>
    </div>
  )
    
  
}

export default App
