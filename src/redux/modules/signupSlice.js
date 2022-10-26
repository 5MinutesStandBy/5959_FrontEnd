import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../shared/api";

// InitialState
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

// 회원가입 정보 보내면 true/false??

export const __addUser1 = createAsyncThunk(
  "Users/addUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    const resData = await axios
      .post(`http://13.125.2.119/api/auth/signup`, payload)
      .then((res) => console.log(res.data))
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const __addUser2 = createAsyncThunk(
  "Users/addUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.post(
        `http://13.125.2.119/api/auth/signup`,
        payload
      );
      console.log(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.data.success == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __CheckUserId = createAsyncThunk(
  "users/__CheckeUserId",
  async (payload, thunkAPI) => {
    try {
      const data = await api.post(`/auth/signup`, payload.userInfo);
      console.log(payload);
      console.log(data);
      if (data.data.success == true) {
        alert("사용가능한아이디입니다");
        payload.setIdCheck(data.data.success);
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      alert("이미 있는 아이디 입니다");
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [__addUser1.pending]: (state) => {
      state.isLoading = true;
    },
    [__addUser1.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = state.action;
    },
    [__addUser1.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__CheckUserId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [__CheckUserId.rejected]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
  },
});

export const {} = SignupSlice.actions;
export default SignupSlice.reducer;
