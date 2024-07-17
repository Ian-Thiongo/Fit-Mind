import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ isLoggedIn, handleLogout }) => {
  const location = useLocation();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const excludedRoutes = ["/login", "/signup"];

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>
        {sidebarVisible ? "←" : "→"}
      </button>
      {(!excludedRoutes.includes(location.pathname) || sidebarVisible) && (
        <div className={`sidebar ${sidebarVisible ? "visible" : "hidden"}`}>
          <div className="sidebar-brand">
            <Link to="/" id="fit" onClick={closeSidebar}>FITMIND</Link>
          </div>
          <ul className="sidebar-nav">
            <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/profile" onClick={closeSidebar}>Profile</Link></li>
            <li><Link to="/goals" onClick={closeSidebar}>Goals</Link></li>
            <li><Link to="/challenges" onClick={closeSidebar}>Fitness Challenges</Link></li>
            <li><Link to="/mindfulness" onClick={closeSidebar}>Mindfulness Sessions</Link></li>
            {isLoggedIn ? (
              <li><Link to="/" onClick={() => { handleLogout(); closeSidebar(); }}>Logout</Link></li>
            ) : (
              <li><Link to="/login" onClick={closeSidebar}>Login</Link></li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
