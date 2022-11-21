import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";

export default function Router () {

    return(
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/sobre" element={<About />}/>
    </Routes>
    )
}