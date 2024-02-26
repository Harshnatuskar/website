import React from "react";
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Read from "../pages/Read";
import Random from "../pages/Random";


function NavBar() {
  return (
    <BrowserRouter>
      <nav className="flex justify-center items-center text-xl pt-5">
      <NavLink
      to="/home"
      className="hover:underline onactive:underline mr-5" 
      >
      Home
      </NavLink>
      <NavLink
      to="/read"
      className="hover:underline onactive:underline mr-5" 
      >
      Bookshelf
      </NavLink>
      <NavLink
      to="/random"
      className="hover:underline onactive:underline" 
      >
      Random
      </NavLink>
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
