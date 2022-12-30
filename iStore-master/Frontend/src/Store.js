import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Components/Services/auth";
import productReducer from "./Components/Services/Product";

export const store = configureStore({
  reducer: {
    users: userReducer,
    product:productReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
