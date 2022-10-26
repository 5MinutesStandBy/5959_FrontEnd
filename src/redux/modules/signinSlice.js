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

// 로그인 요청(체크)
export const __CheckUser = createAsyncThunk(
  "Users/loginUser",
  async ({ userInfo, navigate }, thunkAPI) => {
    try {
      const data = await axios.post(`http://13.125.2.119/api/login`, userInfo);
      console.log(data);
      const token = data.headers.authorization;
      const refreshToken = data.headers.refreshtoken;
      localStorage.setItem("token", token); //토큰 로컬 저장
      localStorage.setItem("refresh-token", refreshToken);

      if (data.data.success === true) {
        alert("로그인 성공");
        navigate("/boards");
        return thunkAPI.fulfillWithValue(data.data);
      }
    } catch (error) {
      console.log(error);
      alert("로그인 실패!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// const logOut = async () => {
//   const contest = window.confirm("정말 로그아웃 하실건가요?");
//   if (contest === true) {
//     const Refreshtoken = localStorage.getItem("refreshToken");
//     const Authorization = localStorage.getItem("authorization");
//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `${Authorization}`,
//       Refreshtoken: `${Refreshtoken}`,
//     };
//     const url = "http://warmwinter.co.kr/api/member/logout";
//     axios.post(
//       url,
//       {},
//       {
//         headers: headers,
//       }
//     );
//     window.localStorage.clear();
//     navigate("/main");
//     setModalOpen(false);
//   } else if (contest === false) {
//     return;
//   }
// };

// 슬라이스
export const LoginSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    //로그아웃시
    logoutUser: (state, payload) => {
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
