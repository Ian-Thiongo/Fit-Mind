import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ isLoggedIn, handleLogout }) => {
  const location = useLocation();
  const excludedRoutes = ["/login", "/signup"]; // Add routes where you don't want the navbar to appear

  if (excludedRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>FITMIND</h2>
      </div>
      <ul className="navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/goals">Goals</Link></li>
        <li><Link to="/challenges">Fitness Challenges</Link></li>
        <li><Link to="/mindfulness">Mindfulness Sessions</Link></li>
        {!isLoggedIn ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <li><button onClick={handleLogout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;