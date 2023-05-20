import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Perform validation on form inputs
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }
  
    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="main">
      <div className="login-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-md-12">
              <h1 className="text-center">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="remember-me" />
                  <label className="form-check-label" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
