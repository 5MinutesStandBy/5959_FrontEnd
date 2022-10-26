import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import jwt_decode from "jwt-decode";

//import Cookie - 쿠키를 쓸건지 로컬스토리지 쓸건지??
import { setCookie, getCookie, removeCookie } from "../../shared/cookie";

//인스턴스 만들기
// InitialState
const initialState = {
  checkusers: [],
  loading: false,
  error: null,
  };
// 로그인 Thunk - 데이터를 보내기만하면 존재하는지 검사해서
// true or false? 아니면 토큰을 주시는걸까용?

console.log(initialState.checkusers)
export const __CheckUser = createAsyncThunk(
  "Users/loginUser",
  async ({ userInfo, navigate }, thunkAPI) => {
    try {
      const data = await axios.post(
        `http://13.125.2.119/api/auth/login`,
        userInfo
      );
      localStorage.setItem("token",data.headers.authorization)
      localStorage.setItem("refresh-token",data.headers.refreshtoken)
      localStorage.setItem("username", data.data.data.username)
      navigate("/boards")
        console.log(data)
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
    },
    [__CheckUser.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export const { logOutUser } = LoginSlice.actions;
export default LoginSlice.reducer;
