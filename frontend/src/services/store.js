import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut } from "./redux";

export const logSlice = createStore(() => {});

const logSlice = createSlice({
    name: "user",
    initialState: {
      isLogged: false,
      token: "",
      userinfo: [],
    },
    reducers: {
        logIn : (state,action) => {
            state.isLogged = true;
            state.token = action.payload.token;
            state.userinfo = action.payload.userinfo;
         },
         logOut : (state) => {
            state.isLogged = false;
            state.token = "";
            state.userinfo = [];
         }
    }
})
