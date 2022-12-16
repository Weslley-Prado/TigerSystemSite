import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Services } from "./pages/Services/Services";

export default function Router () {

    return(
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/sobre" element={<About/>}/>
       <Route path="/produtos" element={<Product/>}/>
       <Route path="/servicos" element={<Services/>}/>
       <Route path="/contato" element={<Contact/>}/>
    </Routes>
    )
}