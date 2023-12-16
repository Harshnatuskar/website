import React from "react";
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Read from "../pages/Read";
import Random from "../pages/Random";


function NavBar() {
  return (
    <BrowserRouter>
      <nav className="text-center pt-5 flex justify-center" >
        <NavLink to="/home" className="hover:underline onactive:underline flex items-center mr-5 text-xl">
          Home
        </NavLink> 
        <NavLink to="/read" className="hover:underline onactive:underline flex items-center mr-5 text-xl ">
          Bookshelf
        </NavLink> 
        <NavLink to="/random" className="hover:underline onactive:underline flex items-center text-xl ">
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
