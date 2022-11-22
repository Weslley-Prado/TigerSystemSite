import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Product } from "./components/Product/Product";
import { Services } from "./components/Services/Services";

export default function Router () {

    return(
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/sobre" element={<About/>}/>
       <Route path="/produtos" element={<Product/>}/>
       <Route path="/servicos" element={<Services/>}/>
    </Routes>
    )
}