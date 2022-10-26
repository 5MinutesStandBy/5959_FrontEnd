import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postsSlice";
import post from "../modules/postSlice";
import comment from "../modules/commentSlice";
import signup from "../modules/signupSlice";
import signin from "../modules/signinSlice";
import myposts from "../modules/mypageSlice";

const store = configureStore({
  reducer: {
    posts,
    post,
    comment,
    signup,
    signin,
    myposts,
  },
});

export default store;
