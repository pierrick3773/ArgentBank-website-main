import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL_ = "http://localhost:3001/api/v1";

export const fetchUserInfo = createAsyncThunk("userInfo/fetchUserInfo", async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Token not found");
  }
  const response = await fetch(`${API_BASE_URL_}/user/profile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user info");
  }

  const data = await response.json();
  return [data.body];
});
