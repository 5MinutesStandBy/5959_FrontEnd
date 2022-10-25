import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postsSlice";
import post from "../modules/postSlice";
import comment from "../modules/commentSlice";
import signup from "../modules/signupSlice";

const store = configureStore({
  reducer: {
    posts,
    post,
    comment,
    signup,
  },
});

export default store;
