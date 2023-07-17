import React from "react";
import {Breadcrumb} from "react-bootstrap";

const Home = () => {
  return (
    <>
    <Breadcrumb>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="/About">About</Breadcrumb.Item>
    </Breadcrumb>
    
    </>
  );
};

export default Home;
