import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./Nav.css";

export function Nav() {
  const [menuResponsive, setMenuResponsive] = useState("menuResponsive");
  const [hamburger, setHambuger] = useState("hamburger");

  const handleExpanded = useCallback(() => {
    let subMenu = menuResponsive;
    let subHamburger = hamburger;
    if (subMenu == "menuResponsive" && subHamburger == "hamburger") {
      subMenu = "menuResponsive2";
      subHamburger = "hamburgerSub";
      setMenuResponsive(subMenu);
      setHambuger(subHamburger);
    } else {
      subMenu = "menuResponsive";
      subHamburger = "hamburger";
      setMenuResponsive(subMenu);
      setHambuger(subHamburger);
    }
  }, [menuResponsive, hamburger]);

  return (
    <div className="menu-area">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark menu">
        <Link to="/" className="logo navbar-brand">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        {/* Main Menu */}
        <div className="containerMainMenu">
          <div className="linkMenu">
            <Link className="link" to={"/"}>
              Inicio
            </Link>
            <Link className="link" to={"/sobre"}>
              Sobre
            </Link>
            <Link className="link" to={"/produtos"}>
              Produtos
            </Link>
            <Link className="link" to={"/servicos"}>
              Serviços
            </Link>
            <Link className="link" to={"/contato"}>
              Contato
            </Link>
          </div>
        </div>

        {/* Responsive menu */}
        <div className="containerHamburger">
          <div className={hamburger}>
            <img
              onClick={handleExpanded}
              src="https://img.icons8.com/fluency/48/000000/menu--v1.png"
            />
          </div>
          <div className="containerMenu">
            <div className={menuResponsive}>
              <Link className="linkMenResp" onClick={handleExpanded} to={"/"}>
                Home <br />
              </Link>
              <Link className="linkMenResp" onClick={handleExpanded} to={"/"}>
                About <br />
              </Link>
              <Link className="linkMenResp" onClick={handleExpanded} to={"/"}>
                Service <br />
              </Link>
              <Link className="linkMenResp" onClick={handleExpanded} to={"/"}>
                Contact <br />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
