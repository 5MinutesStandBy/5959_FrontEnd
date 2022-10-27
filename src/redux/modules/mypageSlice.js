import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  myposts: [],
  mycomments: [],
  myheart: [],
};

export const __getMyPosts = createAsyncThunk(
  "Post/getMyPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "http://13.125.2.119:8080/api/mypage/userboard",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Refresh-Token": localStorage.getItem("refresh-token"),
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getMycomments = createAsyncThunk(
  "Post/getMycomments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "http://13.125.2.119:8080/api/mypage/usercomment",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Refresh-Token": localStorage.getItem("refresh-token"),
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getMyHearts = createAsyncThunk(
  "Post/getMyHearts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "http://13.125.2.119:8080/api/mypage/userheart",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Refresh-Token": localStorage.getItem("refresh-token"),
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const mypageSlice = createSlice({
  name: "myposts",
  initialState,
  reducers: {},
  extraReducers: {
    // Get My Posts
    [__getMyPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.myposts = action.payload;
    },
    [__getMyPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Get My Comments
    [__getMycomments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMycomments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mycomments = action.payload;
    },
    [__getMycomments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Get My Hearts
    [__getMyHearts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyHearts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.myheart = action.payload;
    },
    [__getMyHearts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = mypageSlice.actions;
export default mypageSlice.reducer;
