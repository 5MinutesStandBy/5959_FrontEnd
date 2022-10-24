import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Home from "../pages/home/Home";
import AddPost from "../pages/addpost/AddPost";
import Posts from "../pages/postlist/Posts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="addpost" element={<AddPost />} />
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
