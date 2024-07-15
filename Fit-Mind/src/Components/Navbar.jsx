import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ isLoggedIn, handleLogout }) => {
  const location = useLocation();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const excludedRoutes = ["/login", "/signup"]; // Add routes where you don't want the sidebar to appear

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>
        {sidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
      </button>
      {(!excludedRoutes.includes(location.pathname) || sidebarVisible) && (
        <div className="sidebar">
          <div className="sidebar-brand">
            <Link to="/" id='fit'>FITMIND</Link>
          </div>
          <ul className="sidebar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/goals">Goals</Link></li>
            <li><Link to="/challenges">Fitness Challenges</Link></li>
            <li><Link to="/mindfulness">Mindfulness Sessions</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
