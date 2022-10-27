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
    const resData = await axios
      .post(`http://13.125.2.119/api/auth/signup`, payload)
      .then((res) => res.data)
      .catch((err) => console.err(err));
      console.log(resData)
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const __addUser2 = createAsyncThunk(
  "Users/addUser",
  async ({ userInfo, navigate }, thunkAPI) => {
    try {
      const data = await axios.post(`http://13.125.2.119/api/auth/signup`, userInfo);
      if (data.data.success === true) {
        alert("회원가입이 완료되었습니다!");
        navigate("/");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.data.success == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//아이디중복확인
export const __CheckUserId = createAsyncThunk(
  "users/__CheckeUserId",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        `http://13.125.2.119/api/signup`,
        payload.userInfo
      );
      console.log(payload);
      console.log(data);
      if (data.data.success === true) {
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

// 슬라이스
export const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [__addUser2.pending]: (state) => {
      state.isLoading = true;
    },
    [__addUser2.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = state.action;
    },
    [__addUser2.rejected]: (state, action) => {
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
