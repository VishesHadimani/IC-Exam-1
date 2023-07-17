import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            EduWish
          </Link>
          
          <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
              
              </ul>
            <Link className="btn btn-outline-light rounded-pill mx-2" to="/">Home<span class="sr-only"></span></Link>
            <Link className="btn btn-outline-light rounded-pill mx-2" to="/Courses">Courses</Link>
            <Link className="btn btn-outline-light rounded-pill mx-2" to="/AboutUs">About Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
