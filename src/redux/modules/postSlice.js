import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 수정을 위한 포스트 찾기
export const __getPost = createAsyncThunk(
  "get_Post",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://13.125.2.119:8080/api/boards/${payload}`
      );
      console.log(data.data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updatePost = createAsyncThunk(
  "Post/updatePost",
  async (payload, thunkAPI) => {
    try {
      const data = axios.put(`http://13.125.2.119:8080/api/boards/${payload.id}`, payload,
      {
        headers: {
        Authorization: localStorage.getItem("token"),
        "Refresh-Token": localStorage.getItem("refresh-token"),
        "Content-Type": "application/json",
        },
        });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

const initialState = {
  board: {
    id: 0,
    title: "",
    content: "",
  },
  error: null,
  isLoading: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost: (state) => {
      state.board = {
        id: 0,
        body: "",
        username: "",
        title: "",
      };
    },
  },

  extraReducers: {
    // Get Post
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.board = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Update Post
    [__updatePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.board = action.payload
    },
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearPost } = postSlice.actions;
export default postSlice.reducer;
