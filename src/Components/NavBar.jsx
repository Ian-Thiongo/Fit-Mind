import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  

const NavBar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">FITMIND</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/goals">Goals</Link></li>
        <li><Link to="/challenges">Fitness Challenges</Link></li>
        <li><Link to="/mindfulness">Mindfulness Sessions</Link></li>
        {isLoggedIn ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;