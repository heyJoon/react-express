import axios from "axios";
import Cookies from "js-cookie";
import { userApi } from "../api";
import { AUTH_USER, REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../types";

export const joinUser = async (dataBody) => {
  const request = await userApi.postJoin(dataBody);
  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const loginUser = async (dataBody) => {
  const request = await userApi.postLogin(dataBody);
  return {
    type: LOGIN_USER,
    LoginSuccess: request.data.LoginSuccess,
    userId: request.data.userId,
    Auth: true,
  };
};

export const AuthCheck = () => {
  const request = userApi.getAuth().then((response) => response.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
};

export const LogOutUser = async () => {
  console.log(Cookies.get());
  console.log(document.cookies);
  const request = await userApi.getLogOut().then((response) => response.data);
  console.log("request", request);
  return {
    type: LOGOUT_USER,
    userId: request.userId,
    isAuth: request.isAuth,
    payload: request,
  };
};

export const cookieTest = async () => {
  const request = await axios.post(
    "http://localhost:5000/test",
    {},
    { withCredentials: true }
  );
  console.log(request);

  return {
    type: "test",
    payload: request,
  };
};
