import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./products/productsSlice";
import { authSlice } from "./auth/authSlice";

export const rootReducer = combineReducers({
  products: productsSlice.reducer,
  auth: authSlice.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof setupStore.dispatch;
