
import React from 'react';
import './App.css';
import Login from "./Components/Login";
import Goal from './Components/GoalsPage';
import Profile from './Components/Profile';
import Mindfulness from './Components/Mindfulness';


function App() {
  return (
    <div classname="App">
    <Login />
    <Profile />
    <Mindfulness />

    </div>
  );

}

export default App;
