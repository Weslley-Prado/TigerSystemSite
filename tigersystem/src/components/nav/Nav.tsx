import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./Nav.css";

export function Nav() {
  const [isNavExpanded, setNavExpanded] = useState(false);

  const handleExpanded = useCallback(() => {
    if (!isNavExpanded) {
      alert(isNavExpanded);
      setNavExpanded(isNavExpanded);
      console.log(isNavExpanded);
    }
  }, [isNavExpanded]);

  return (
    <div className="menu-area">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark menu">
        <Link to="/" className="logo navbar-brand">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <div className="hamburger">
          <div>
            <img
              onClick={handleExpanded}
              src="https://img.icons8.com/fluency/48/000000/menu--v1.png"
            />
          </div>
          <div className="menuResponsive">
            <div className="linkResp">
              <Link className="linkMenResp" to={"/"}>
                Home <br />
              </Link>
              <Link className="linkMenResp" to={"/"}>
                About <br />
              </Link>
              <Link className="linkMenResp" to={"/"}>
                Service <br />
              </Link>
              <Link className="linkMenResp" to={"/"}>
                Contact <br />
              </Link>
            </div>
          </div>
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
