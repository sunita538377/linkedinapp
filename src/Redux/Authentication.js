import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: localStorage.getItem("linkedin-token") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("linkedin-user", JSON.stringify(action.payload));
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("linkedin-token", action.payload);
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("linkedin-user");
      localStorage.removeItem("linkedin-token");
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;

export default authSlice.reducer;
