import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import jwt_decode from "jwt-decode";

//인스턴스 만들기
// InitialState
const initialState = {
  checkusers: [],
  username: [],
  loading: false,
  error: null,
};

export const __getUsername = createAsyncThunk(
  "Users/getusername",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`http://13.125.2.119/api/mypage/userinfo`, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Refresh-Token": localStorage.getItem("refresh-token"),
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data.username);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 로그인 Thunk - 데이터를 보내기만하면 존재하는지 검사해서
// true or false? 아니면 토큰을 주시는걸까용?

export const __CheckUser = createAsyncThunk(
  "Users/loginUser",
  async ({ userInfo, navigate }, thunkAPI) => {
    try {
      const data = await axios.post(
        `http://13.125.2.119/api/auth/login`,
        userInfo
      );
      console.log(data);
      localStorage.setItem("token", data.headers.authorization);
      localStorage.setItem("refresh-token", data.headers.refreshtoken);
      localStorage.setItem("username", data.data.data.username);
      if (data.data.success === true) {
        alert("로그인 성공");
        navigate("/boards");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      alert("로그인 실패!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 슬라이스
export const LoginSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    //로그아웃시
    logoutUser: (state, payload) => {
      state.checkusers = { success: false };
      state.username = "";
    },
  },
  extraReducers: {
    [__CheckUser.pending]: (state) => {
      state.loading = true;
    },
    [__CheckUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.checkusers = action.payload;
    },
    [__CheckUser.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
    [__getUsername.fulfilled]: (state, action) => {
      state.loading = false;
      state.username = action.payload;
    },
  },
});

export const { logOutUser } = LoginSlice.actions;
export default LoginSlice.reducer;
