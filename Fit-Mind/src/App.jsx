import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/home';
import Login from "./Components/Login";
import Goal from './Components/GoalsPage';
import Profile from './Components/Profile';
import Mindfulness from './Components/Mindfulness';
import NavBar from './Components/NavBar';
import Challenges from './Components/ChallengeBox';

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
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/mindfulness" element={<Mindfulness />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
