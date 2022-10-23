import React from "react";
import Navbar from "./header/Navbar";
import Posts from "./posts/Posts";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Posts></Posts>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
