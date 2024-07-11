import { useState } from 'react'
import './App.css'
import Goal from './Components/GoalsPage'
import Profile from './Components/Profile'
import Mindfullness from './Components/Mindfullness'

function App() {
  return(
    <div className="App">
      <Profile />
     <Goal/>
     <Mindfullness/>
    </div>
  )
    
  
}

export default App
