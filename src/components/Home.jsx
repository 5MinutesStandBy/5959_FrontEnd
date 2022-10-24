import React from "react";
import Navbar from "./header/Navbar";
import Posts from "./posts/Posts";
import Footer from "./footer/Footer";
import styled from "styled-components";
import Navbar from "./header/Navbar";
import LoginModalSet from "./modal/LoginModalSet";
import Posts from "./posts/Posts";
import UnLoginMain from "./unLogin/UnLoginMain";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Posts></Posts>
    </div>
  );
};

export default Home;
