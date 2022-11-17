import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Router from "./Route";

function App() {
  return (
    <BrowserRouter>
     <Nav />
      <Router />
    </BrowserRouter>
  );
}

export default App;
