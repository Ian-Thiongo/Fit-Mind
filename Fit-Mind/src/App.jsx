import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/home';
import Login from "./Components/Login";
import Goal from './Components/GoalsPage';
import Profile from './Components/Profile';
import Mindfulness from './Components/Mindfulness';
import NavBar from './Components/NavBar';
import FitnessChallenge from './Components/FitnessChallenge';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/goals" element={<Goal />} />
          <Route path="/Challenges" element={<FitnessChallenge />} />
          <Route path="/mindfulness" element={<Mindfulness />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;