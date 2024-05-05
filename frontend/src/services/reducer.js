import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userDetails: null,
    token: null,
    loading: false,
    error: null,
    isLoggedIn: false, // ajoutez cette propriété
  };
  
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      loginSuccess: (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.isLoggedIn = true; // mettez à jour cette propriété
      },
    loginFailed: (state, action) => {
      state.user = null;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userDetails = null;
      state.error = null;
      state.isLoggedIn = false;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { loginSuccess, loginFailed, logout, setUserDetails } = authSlice.actions;
export default authSlice.reducer;
