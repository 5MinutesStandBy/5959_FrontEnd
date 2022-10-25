//import Thunk
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//import Cookie - 쿠키를 쓸건지 로컬스토리지 쓸건지??
import { setCookie, getCookie, removeCookie } from "../../shared/cookie";

//인스턴스 만들기
const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

// 로그인 Thunk - 데이터를 보내기만하면 존재하는지 검사해서
// true or false? 아니면 토큰을 주시는걸까용?

export const login = async (email, pw) => {
  return await axios
    .post(
      `${serverURL}/login/`,
      {
        email: email,
        password: pw,
      },
      { withCredentials: true }
    )
    .then((response) => {
      /// token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
      return "이메일 혹은 비밀번호를 확인하세요.";
    });
};

// export const __signin = createAsyncThunk(
//   "member/signMember",
//   async (payload, thunkAPI) => {
//     const resData = await api
//       .post(`http://localhost:3000/login`, payload)
//       .then((res) => res)
//       .catch((err) => console.err(err));
//     window.localStorage.setItem(
//       "authorization",
//       resData.headers["authorization"].split(" ")[1]
//     );
//     window.localStorage.setItem(
//       "refresh-token",
//       resData.headers["refresh-token"]
//     );
//   }
// );

// Thunk

export const __signinCheck = createAsyncThunk(
  "Login/loginCheck",
  async (payload, thunkAPI) => {
    try {
      const accessToken = cookies.get("Authorization");
      const data = await axios.get(`/signup`, {
        headers: {
          Authorization: accessToken,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// InitialState
const initialState = {
  isLoading: false,
  isLogin: false,
};

export const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [__signinCheck.pending]: (state) => {
      state.isLoading = true;
    },
    [__signinCheck.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
    },
    [__signinCheck.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
