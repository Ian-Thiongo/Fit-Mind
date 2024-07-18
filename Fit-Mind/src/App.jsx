import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/home';
import Login from './Components/Login';
import Goal from './Components/GoalsPage';
import Profile from './Components/Profile';
import Mindfulness from './Components/Mindfulness';
import NavBar from './Components/NavBar';
import FitnessChallenge from './Components/FitnessChallenge';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('userToken', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && <NavBar onLogout={handleLogout} />}
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {isAuthenticated ? (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/goals" element={<Goal />} />
            <Route path="/challenges" element={<FitnessChallenge />} />
            <Route path="/mindfulness" element={<Mindfulness />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
