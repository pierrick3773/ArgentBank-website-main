import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userDetails: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    loginFailed: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userDetails = null;
      state.error = null;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    
  },
});

export const { loginSuccess, loginFailed, logout, setUserDetails } = authSlice.actions;
export default authSlice.reducer;
