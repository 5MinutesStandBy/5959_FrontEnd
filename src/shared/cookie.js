import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value) => {
  return cookies.set(name, value, { path: "/" });
};
export const getCookie = (name) => {
  return cookies.get(name, { path: "/" });
};
export const removeCookie = (name) => {
  cookies.remove(name, { path: "/" });
};
