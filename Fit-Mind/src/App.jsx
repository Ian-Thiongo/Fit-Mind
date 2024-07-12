

import React from 'react';
import './App.css';
import Login from "./Components/Login";
import Goal from './Components/GoalsPage';
import Profile from './Components/Profile';
import Mindfullness from './Components/Mindfullness';

function App() {
  return (
    <div classname="App">
    <Login />
    <Profile />
    <Mindfullness />
    </div>
  );

}

export default App;
