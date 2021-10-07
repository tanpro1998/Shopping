import { publicRequest, userRequest } from "../request";
import {
  deleteProductFail,
  deleteProductStart,
  deleteProductSuccess,
  getProductFail,
  getProductStart,
  getProductSuccess,
  updateProductFail,
  updateProductStart,
  updateProductSuccess,
} from "./productRedux";
import { loginFail, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFail());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFail());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.post("/products", product);
    dispatch(updateProductSuccess(res.data));
  } catch (err) {
    dispatch(updateProductFail());
  }
};
