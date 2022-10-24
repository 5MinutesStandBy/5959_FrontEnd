import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __getPosts = createAsyncThunk(
  "post/getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPosts = createAsyncThunk(
  "post/addPosts",
  async (payload, thunkAPI) => {
    try {
      axios.post("http://localhost:3001/posts", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePosts = createAsyncThunk(
  "post/deletePosts",
  async (payload, thunkAPI) => {
    try {
      axios.delete(`http://localhost:3001/posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // Get Posts
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.posts.sort((a, b) => b.id - a.id);
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Add
    [__addPosts.pending]: (state) => {
      state.isSuccess = false;
      state.isLoading = true;
    },
    [__addPosts.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.posts.unshift(action.payload);
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // delete

    [__deletePosts.pending]: (state) => {
      state.isSuccess = false;
      state.isLoading = true;
    },
    [__deletePosts.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    [__deletePosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
