import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Logo from "./Logo.png";

const Navbar = () => {
  return (
    <nav> 
      <Link to="/"><div className="logo">
        <img className='llo' src={Logo} alt="Logo" />
      </div></Link>
      <ul className="nav-links">
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/OngoingDisputes">Ongoing disputes</Link></li>
        <li><Link to="/">Create dispute</Link></li>
        <li><Link to="/ClosedDisputes">Closed disputes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
