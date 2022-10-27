import axios from "axios";

//인스턴스 설정

const api = axios.create({
  baseURL: "http://13.125.2.119/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

//인터셉트?
api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export default api;
