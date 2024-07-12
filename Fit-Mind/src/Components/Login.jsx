import React, { useState } from 'react';
import "../Components/login.css";

function Login() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setShowSignUpModal(false);
  };

  return (
    <div className='landing-page'>
      <div className="background">
        <img src="/Dark Mind Wallpapers Aesthetic.jpeg" alt="Background" />
      </div>
      <div className="content">
        <h1>Fit-Mind</h1>
        <h2>Find your inner Peace</h2>
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
          <button className="cta" onClick={handleLoginClick}>Login with Email</button>
          <p>Don't have an account? <a href="#" onClick={handleSignUpClick}>Sign Up</a></p>
        </div>
        {showLoginModal && (
          <Modal onClose={handleCloseModal}>
            <LoginForm />
          </Modal>
        )}
        {showSignUpModal && (
          <Modal onClose={handleCloseModal}>
            <SignUpForm />
          </Modal>
        )}
      </div>
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-modal" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please enter email and password');
    } else {
      // Handle form submission and validation
      console.log('Login form submitted');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)} 
      />
      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        value={password} 
        onChange={(event) => setPassword(event.target.value)} 
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Handle form submission and validation
      console.log('Sign-up form submitted');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)} 
      />
      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        value={password} 
        onChange={(event) => setPassword(event.target.value)} 
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input 
        type="password" 
        id="confirmPassword" 
        value={confirmPassword} 
        onChange={(event) => setConfirmPassword(event.target.value)} 
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Login;
