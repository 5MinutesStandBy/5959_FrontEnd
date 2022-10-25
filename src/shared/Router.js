import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Home from "../pages/home/Home";
import AddPost from "../pages/addpost/AddPost";
import Posts from "../pages/posts/Posts";
import Detail from "../pages/detail/Detail";
import Signin from "../pages/signin/Signup";
import SignUp from "../pages/signup/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="addpost" element={<AddPost />} />
          <Route path="posts/:id" element={<Detail />} />
          <Route path="signup" element={<Signin />} />
          <Route path="detail" element={<Detail />} />
          <Route path="signup" element={<SignUp />} />
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
