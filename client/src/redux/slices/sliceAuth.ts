import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema } from "../../models/user";

interface AuthState {
  id: string | null;
  username: string | null;
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: !!localStorage.getItem("token"),
  id: localStorage.getItem("id"),
  username: localStorage.getItem("username"),
  token: localStorage.getItem("token"),
};

export const sliceAuth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ user: UserSchema; token: string }>
    ) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("id", action.payload.user.id);
      localStorage.setItem("username", action.payload.user.username);

      state.id = action.payload.user.id;
      state.username = action.payload.user.username;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    logout: (state) => {
      localStorage.clear();

      state.id = null;
      state.username = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = sliceAuth.actions;

export const ReducerAuth = sliceAuth.reducer;
export const ActionAuth = sliceAuth.actions;
