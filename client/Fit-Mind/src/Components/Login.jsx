import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login({ onLogin }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const navigate = useNavigate();

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

  const handleLogin = async (values) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful', data);
        onLogin(data.token);
        navigate('/', { replace: true });
      } else {
        console.error('Login failed', data);
      }
    } catch (error) {
      console.error('An error occurred during login', error);
    }
  };
  
  const handleSignUp = async (values) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Sign-up successful', data);
        onLogin(data.token);
        navigate('/', { replace: true });
      } else {
        console.error('Sign-up failed', data);
      }
    } catch (error) {
      console.error('An error occurred during sign-up', error);
    }
  };
  

  return (
    <div className="landing-page">
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
            <LoginForm onLogin={handleLogin} />
          </Modal>
        )}
        {showSignUpModal && (
          <Modal onClose={handleCloseModal}>
            <SignUpForm onSignUp={handleSignUp} />
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

const LoginForm = ({ onLogin }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onLogin}
    >
      {() => (
        <Form>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
          
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />

          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

const SignUpForm = ({ onSignUp }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={onSignUp}
    >
      {() => (
        <Form>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
          
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <Field type="password" id="confirmPassword" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" className="error" />

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;