import React from 'react';
import './Nav.css';

import { NavLink } from 'react-router-dom';

const Nav = props => {
  return (
    <nav className="tabs">
      <NavLink activeClassName="active" exact to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/add">Add a Card</NavLink>
      <NavLink activeClassName="active" to="/about">About</NavLink>
    </nav>
  );
}

export default Nav;
