import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  myposts: [],
  mycoments: [],
};

export const __getMyPosts = createAsyncThunk(
  "Post/getMyPosts",
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
  },
});

export const {} = mypageSlice.actions;
export default mypageSlice.reducer;
