import { createSlice } from "@reduxjs/toolkit";
import { logCall } from "../CAllAPI/LogCall"

const initialState = {
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(logCall.pending, (state) => {
        state.error = null;
      })
      .addCase(logCall.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(logCall.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
