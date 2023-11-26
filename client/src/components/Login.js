import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validatePassword = () => {
     const { password } = formData;

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }

    // Check if the password contains at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError('Password must contain at least one special character');
      return false;
    }

    // Check if the password contains at least one alphabet character
    if (!/[a-zA-Z]/.test(password)) {
      setError('Password must contain at least one alphabet character');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!validatePassword()) {
      return;
    }
    try {
      // Make a request to your login endpoint on the server
      const response = await axios.post('/login', formData);
      console.log(response.data); // Handle the response as needed

      handleLogin();
      setRedirectToReferrer(true);
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setError('Invalid username or password');
    }
  };

  if (redirectToReferrer) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
         {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default Login;