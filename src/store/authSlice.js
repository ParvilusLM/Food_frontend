import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: state => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    authError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    startLoading: state => {
      state.loading = true;
    }
  }
});

export const { login, logout, authError, startLoading } = authSlice.actions;

export default authSlice.reducer;
