import React from 'react';
import './Nav.css';

const Nav = props => {
  return (
    <nav className="tabs">
      <a href="#" className="active">Home</a>
      <a href="#">Add a Card</a>
      <a href="#">About</a>
    </nav>
  );
}

export default Nav;
