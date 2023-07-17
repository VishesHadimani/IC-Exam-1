import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Courses from "./components/Courses"
import About from "./components/About";
import NavBar from "./components/Navbar.js";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/About Us" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
