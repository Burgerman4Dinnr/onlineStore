import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Link to="/">
              <img src="/images/euroLieutenant.png" alt="Euro Lieutenant Logo" className="img-fluid euroLieutenant"
              />
            </Link>
          </div>
          <div className="col-6">
            <div className="login text-end">
              <Link to="/login">
                <button className="logBtn">Log In</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
            <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;