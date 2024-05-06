import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL_ = "http://localhost:3001/api/v1";

export const updateUserProfile = createAsyncThunk(
  "userProfile/updateUserProfile",
  async (userProfileData) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found");
    }

    const response = await fetch(`${API_BASE_URL_}/user/profile`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userProfileData),
    });

    if (!response.ok) {
      throw new Error("Failed to update user profile");
    }

    const data = await response.json();
    return data.body;
  }
);
