import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: "",
  loading: false,
  message: null,
};



export const fetchUser = createAsyncThunk("SingupUser", async (body) => {
  const result = await axios.post("/api/register", body);
  return result;
});
export const fetchLoginUser = createAsyncThunk("createUser", async (body) => {
  const result = await axios.post("/api/singup", body);
  return result;
});

const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    addToken: (state) => {
      state.token = localStorage.getItem("token");
    },
    removeToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, { payload: { message, token, error } }) => {
      state.loading = false;
      if (message) {
        state.message = message;
        state.token = token;
        localStorage.setItem("token", token);
      } else {
        state.message = error;
      }
    },

    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.message = action.payload.error;
    },

    [fetchLoginUser.fulfilled]: (
      state,
      { payload: { message, error, token } }
    ) => {
      state.loading = false;

      if (message) {
        state.message = message;
        state.token = token;
        localStorage.setItem("token", token);
      } else {
        state.message = error;
      }
    },

    [fetchLoginUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchLoginUser.rejected]: (state, action) => {
      state.loading = false;
      state.message = action.payload.error;
    },
  },
});

export const { addToken, removeToken } = userReducer.actions;

export default userReducer.reducer;
