// components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

const Register = ({ handleRegister }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to your registration endpoint on the server
      const response = await axios.post('/register', formData);
      console.log(response.data); // Handle the response as needed

      handleRegister(formData);
      setRedirectToReferrer(true);
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
    }
  };

  if (redirectToReferrer) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Register</h2>
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
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default Register;
