

const API_BASE_URL_ = "http://localhost:3001/api/v1";

const response = await fetch(`${API_BASE_URL_}/user/profile`, {
  method: "PUT",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    userName: newUserName,
  }),
});
