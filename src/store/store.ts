import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./products/productsSlice";

export const rootReducer = combineReducers({
  products: productsSlice.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof setupStore.dispatch;
