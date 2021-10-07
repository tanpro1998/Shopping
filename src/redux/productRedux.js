import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetch: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFetch = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetch = false;
      state.products = action.payload;
    },
    getProductFail: (state) => {
      state.isFetch = false;
      state.error = true;
    },
    // DELETE
    deleteProductStart: (state) => {
      state.isFetch = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetch = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload.id),
        1
      );
    },
    deleteProductFail: (state) => {
      state.isFetch = false;
      state.error = true;
    },
    // UPDATE
    updateProductStart: (state) => {
      state.isFetch = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetch = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFail: (state) => {
      state.isFetch = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFail,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFail,
  updateProductStart,
  updateProductSuccess,
  updateProductFail,
} = productSlice.actions;

export default productSlice.reducer;
