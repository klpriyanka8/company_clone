
import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import axios from 'axios'
import Homepage from './components/Homepage'
import Addcustomer from './components/Addcustomer'
import Displaycustomer from './components/Displaycustomer'
import Updatecustomer from './components/Updatecustomer'
import Searchcustomer from './components/Searchcustomer'
import Deletecustomer from './components/Deletecustomer'
import Login from './components/Login';
import Register from './components/Register';
function App() {
  axios.defaults.baseURL='http://localhost:5000'
   const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // You can implement your authentication logic here
    // For simplicity, let's assume any non-empty credentials are valid
    setAuthenticated(true);
  };

  const handleLogout = () => {
    // Implement logout logic if needed
    setAuthenticated(false);
  };
   const handleRegister = (userData) => {
    // You can implement your registration logic here
    // For simplicity, you might want to send a request to your server to create a new user
    console.log('Registration logic goes here:', userData);
  };
  return (
    <div>
      
        <Router>
          <Routes>
            <Route
            path="/"
            element={
              authenticated ? (
                <Homepage handleLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
             <Route
            path="/register"
            element={<Register handleRegister={handleRegister} />}
          />
            <Route path='/' exact element={<Homepage/>}/>
            <Route path='/addcustomer' exact element={<Addcustomer/>}/>
            <Route path='/displaycustomer' exact element={<Displaycustomer/>}/>
            <Route path='/updatecustomer' exact element={<Updatecustomer/>}/>
            <Route path='/searchcustomer' exact element={<Searchcustomer/>}/>
            <Route path='/deletecustomer' exact element={<Deletecustomer/>}/>
          </Routes>
        </Router>
        
    </div>
        
   
  );
}

export default App;
