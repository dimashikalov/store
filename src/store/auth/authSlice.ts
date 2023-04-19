import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

export interface AuthState {
  isLoading: boolean;
  error: string;
  user: IUser;
  auth: boolean;
  token: string;
}

const initialState: AuthState = {
  isLoading: false,
  error: "",
  auth: false,
  token: "",
  user: {} as IUser,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authFetching(state) {
      state.isLoading = true;
    },
    authFetchingSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = "";
      state.auth = true;
      state.token = action.payload;
    },
    authFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    authUserFething(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    authExit(state) {
      state.auth = false;
    },
  },
});
