import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Read from "../pages/Read";
import Random from "../pages/Random";
import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom";

function NavBar() {
  return (
    <BrowserRouter>
      <nav className="text-center pt-5  ">
        <NavLink to="/home" className="hover:underline onactive:underline">Home</NavLink> |
        <NavLink to="/read" className="hover:underline onactive:underline" >  Reading </NavLink> |
        <NavLink to="/random" className="hover:underline onactive:underline" >  Random</NavLink>
      </nav>

      <Routes>
      <Route path="/" element={<Navigate to="/home" />} /> 
      <Route path="/home" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/random" element={<Random />} />
        <Route path="/" element={<Navigate to="/home" />} />
            
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
