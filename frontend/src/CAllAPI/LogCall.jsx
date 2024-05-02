const API_BASE_URL_ = "http://localhost:3001/api/v1";
console.log(API_BASE_URL_);

import { createAsyncThunk } from "@reduxjs/toolkit";

export const logCall = createAsyncThunk("user/login", async (credentials, thunkAPI) => {
  try {
    const response = await fetch(`${API_BASE_URL_}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      return thunkAPI.rejectWithValue("Email ou mot de passe incorrect");
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


  