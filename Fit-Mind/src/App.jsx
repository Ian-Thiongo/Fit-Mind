import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/home';
import Login from "./Components/Login";
import Goal from './Components/GoalsPage';
import Profile from './Components/Profile';
import Mindfulness from './Components/Mindfulness';
import NavBar from './Components/NavBar';
import Challenges from './Components/ChallengeBox'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/challenges" element={<FitnessChallengesPage />} />
        <Route path="/mindfulness" element={<MindfulnessSessionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
