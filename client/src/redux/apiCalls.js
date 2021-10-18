import { publicRequest } from "../config";
import {
  loginFail,
  loginStart,
  loginSuccess,
  registerFail,
  registerStart,
  registerSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFail());
  }
};

export const logout = async (dispatch) => {
  dispatch(logout());
};
