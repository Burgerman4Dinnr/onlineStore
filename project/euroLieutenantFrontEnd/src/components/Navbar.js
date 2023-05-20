import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar justify-content-center">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item n1">
          <Link to="/catalogue">Catalogue</Link>
        </li>
        <li className="nav-item n2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
    </>
  );
};

export default Navbar;
