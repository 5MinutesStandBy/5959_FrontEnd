import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postsSlice";
import post from "../modules/postSlice";
import comment from "../modules/commentSlice"

const store = configureStore({
  reducer: {
    posts,
    post,
    comment,
  },
});

export default store;
