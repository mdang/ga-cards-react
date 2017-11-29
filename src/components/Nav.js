import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';

const Nav = props => {
  return (
    <nav className="tabs">
      <Link to="/" className="active">Home</Link>
      <Link to="/add">Add a Card</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Nav;
