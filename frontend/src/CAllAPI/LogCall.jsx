const API_BASE_URL_ = "http://localhost:3001/api/v1";
console.log(API_BASE_URL_);
import { loginSuccess } from "../services/reducer";


import { createAsyncThunk } from "@reduxjs/toolkit";

export const logCall = createAsyncThunk("user/login", async (credentials, thunkAPI) => {
  const failMessage = document.querySelector('.fail');

  try {
    const response = await fetch(`${API_BASE_URL_}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      failMessage.style.display = 'flex'
      return thunkAPI.rejectWithValue("Email ou mot de passe incorrect");
    }

    const data = await response.json();
    console.log(data);
    localStorage.setItem("token", data.body.token); // Stocke le jeton dans le stockage local

    // Dispatchez l'action loginSuccess avec les données utilisateur
    thunkAPI.dispatch(loginSuccess(data.body.user));

    return data.token;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});




  