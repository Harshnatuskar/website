import React from "react";
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
        <Route path="/home" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
