import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Router from "./Route";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
      <link
        rel="stylesheet"
        href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css"
      />{" "}
      <a
        id="robbu-whatsapp-button"
        target="_blank"
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=28999199766"
      >
        {" "}
        <div className="rwb-tooltip">Fale conosco</div>{" "}
        <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg" />{" "}
      </a>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
