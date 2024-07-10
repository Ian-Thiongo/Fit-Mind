import React, { useState } from 'react';
import './login.css';

function Login() {
  const [showForm, setShowForm] = useState(false);

  const handleLoginClick = () => {
    setShowForm(true);
  };

  const handleSignUpClick = () => {
    setShowForm(true);
  };

  return (
    <div className="landing-page">
      <div className="background">
        <img src="src/assets/Dark Mind Wallpapers Aesthetic.jpeg" alt="Background Image" />
      </div>
      <div className="content">
        <h1>Find Your Inner Peace</h1>
        <p>Reduce stress, improve focus, and live a healthier life with our mindfulness app.</p>
        <button className="cta" onClick={handleLoginClick}>Start Your Journey</button>
        <div className="features">
          <h2>Do meditation. Stay focused. Live a healthy life.</h2>
          <ul>
            <li>Guided meditation sessions</li>
            <li>Personalized fitness challenges</li>
            <li>Track your progress and stay motivated</li>
          </ul>
        </div>
        <div className="call-to-action">
          <button className="cta" onClick={handleSignUpClick}>Login with Email</button>
          <p>Don't have an account? <a href="#" onClick={handleSignUpClick}>Sign Up</a></p>
        </div>
        {showForm && <Form />}
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="form-container">
      <form>
        <label>Email:</label>
        <input type="email" />
        <br />
        <label>Password:</label>
        <input type="password" />
        <br />
        { /* Add more form fields as needed */ }
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;