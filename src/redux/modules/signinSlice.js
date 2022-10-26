import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../shared/api";
// import jwt_decode from "jwt-decode";

// InitialState
const initialState = {
  checkusers: [],
  loading: false,
  error: null,
};

export const __CheckUser = createAsyncThunk(
  "Users/loginUser",
  async ({ userInfo, navigate }, thunkAPI) => {
    try {
      const data = await axios.post(
        `http://13.125.2.119/api/auth/login`,
        userInfo
      );
      console.log(data);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      if (error.response.data.success == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 슬라이스
export const LoginSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    logOutUser: (state, payload) => {
      state.checkusers = { success: false };
    },
  },
  extraReducers: {
    [__CheckUser.pending]: (state) => {
      state.loading = true;
    },
    [__CheckUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.checkusers = action.payload;
      console.log(action.payload);
    },
    [__CheckUser.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export const { logOutUser } = LoginSlice.actions;
export default LoginSlice.reducer;
