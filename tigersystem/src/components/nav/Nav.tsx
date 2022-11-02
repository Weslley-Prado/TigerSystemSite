import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./Nav.css";

export function Nav() {
     
   
  return (
    <div className="menu-area">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark menu">
        <Link to="/" className="logo navbar-brand">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <div className="hamburger">
        <img src="https://img.icons8.com/fluency/48/000000/menu--v1.png"/>
        </div>
        <div className="linkMenu">
          <Link className="link" to={"/"}>
            Home
          </Link>
          <Link className="link" to={"/"}>
            About
          </Link>
          <Link className="link" to={"/"}>
            Product
          </Link>
          <Link className="link" to={"/"}>
            Services
          </Link>
          <Link className="link" to={"/"}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
