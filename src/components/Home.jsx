import React from "react";
import styled from "styled-components";
import Navbar from "./header/Navbar";
import LoginModalSet from "./modal/LoginModalSet";
import Posts from "./posts/Posts";
import UnLoginMain from "./unLogin/UnLoginMain";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <UnLoginMain></UnLoginMain>
    </div>
  );
};

export default Home;
