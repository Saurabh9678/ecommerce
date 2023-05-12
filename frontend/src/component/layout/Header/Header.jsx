import React, { useState } from 'react';
import "./Header.css";
import {Link} from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      
      <span className="nav-logo">
            <font color="#ffffff">F</font>
            <font color="#ffffff">a</font>
            <font color="#ffffff">n</font>
            <font color="#ffffff">c</font>
            <font color="#ffffff">y</font>
            <font color="#D74345">L</font>
            <font color="#D74345">a</font>
            <font color="#D74345">n</font>
            <font color="#D74345">d</font>
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to={"/"}>Home</Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header