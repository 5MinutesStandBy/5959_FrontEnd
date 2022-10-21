import React from "react";
import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import Posts from "./posts/Posts";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Posts></Posts>
    </div>
  );
};

export default Home;
