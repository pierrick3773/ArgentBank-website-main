import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer";
// import thunk from "redux-thunk/es/index.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // middleware: [thunk],
});


