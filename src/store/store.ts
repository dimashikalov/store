import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({});

export const setupStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof setupStore.dispatch;
