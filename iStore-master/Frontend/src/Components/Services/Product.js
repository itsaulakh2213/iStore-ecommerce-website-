import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "./Request";

const initialState = {
  loading: false,
  error: "",
  message: "",
  product:[]
};

export const createproduct = createAsyncThunk("createproduct", async ( body) => {
  const res = await config("createProduct","post", body)
  return res
})

export const getProduct = createAsyncThunk("getProduct", async ( ) => {
  const res = await axios.get("get/product");
  return res;
}

);

const productReducer = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [createproduct.fulfilled]: (state) => {
      state.loading = false;
    },
    [createproduct.pending]: (state) => {
      state.loading = true;
    },
    [createproduct.rejected]: (state ) => {
      state.loading = false;
      
    },
    [getProduct.fulfilled]: (state, { payload:{message, error, data}}) => {
      state.loading = false;
      state.message = message;
      state.product = data.product;
      if (error) {
        state.error = error
      }
    },
    [getProduct.pending]: (state) => {
      state.loading = true;
    },
  },
});

export default productReducer.reducer;
