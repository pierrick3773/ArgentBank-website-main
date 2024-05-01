import { configureStore } from "@reduxjs/toolkit";

import logSlice from "./store";
export const { logIn, logOut } = userSlice.actions;

export const store = configureStore({
    reducer: {
      user: logSlice.reducer,
    },
  });
