//import Thunk
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  signup: [],
  isLoading: false,
  error: null,
};

// 회원가입 정보 보내면 true/false
export const __addUser = createAsyncThunk(
  "User/addUser",
  async (payload, thunkAPI) => {
    const resData = await axios
      .post(`http://localhost:3001/signup`, payload)
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [__addUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__addUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.signup.username = action.payload.username;
      state.signup.password = action.payload.password;
      state.signup.passwordConfirm = action.payload.passwordConfirm;
    },
    [__addUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = SignupSlice.actions;
export default SignupSlice.reducer;
