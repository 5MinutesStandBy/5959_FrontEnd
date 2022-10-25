import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Home from "../pages/home/Home";
import AddPost from "../pages/addpost/AddPost";
import Posts from "../pages/posts/Posts";
import Detail from "../pages/detail/Detail";
import Signup from "../pages/signup/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="" element={<Home />} />
          <Route path="boards" element={<Posts />} />
          <Route path="boards/:id" element={<Detail />} />
          <Route path="addpost" element={<AddPost />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

function Nav() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}

export default Router;
