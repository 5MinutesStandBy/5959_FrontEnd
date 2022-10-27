import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __getPosts = createAsyncThunk(
  "Post/getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://13.125.2.119:8080/api/boards");
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPosts = createAsyncThunk(
  "Post/addPosts",
  async (payload, thunkAPI) => {
    try {
      axios.post(
        "http://13.125.2.119:8080/api/boards",
        (payload = { title: payload.name, content: payload.desc }),
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Refresh-Token": localStorage.getItem("refresh-token"),
            "Content-Type": "application/json",
          },
        }
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePosts = createAsyncThunk(
  "Post/deletePosts",
  async (payload, thunkAPI) => {
    try {
      axios.delete(`http://13.125.2.119:8080/api/boards/${payload}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Refresh-Token": localStorage.getItem("refresh-token"),
          "Content-Type": "application/json",
        },
      });
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
