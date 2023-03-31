import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authApi } from "./isAuth/isAuth";
import { usersApi } from "./users/users";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, usersApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof setupStore.dispatch;
