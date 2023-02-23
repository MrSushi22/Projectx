import './Navbar.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Menu</a></li>
        <li><a>Awards</a></li>
        <li><a>Contact</a></li>
      </ul>
      <div>
        <a>Log In / Registration</a>
        <div />
        <a>Book Table</a>
      </div>
    </nav>
  );
};
