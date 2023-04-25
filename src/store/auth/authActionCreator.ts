import axios from "axios";
import { AppDispatch } from "../store";
import { authSlice } from "./authSlice";
import { IUser } from "../../models/IUser";
import { STORE_URL } from "../../utils/api";
import { IAuthData } from "../../models/IAuthData";

const headers = {
  "Content-Type": "application/json",
};

export const fetchAuth =
  (authData: IAuthData) => async (dispatch: AppDispatch) => {
    const json = JSON.stringify(authData);
    try {
      dispatch(authSlice.actions.authFetching());
      const responce = await axios.post<string>(
        `${STORE_URL}/auth/login`,
        json,
        { headers: headers }
      );
      dispatch(authSlice.actions.authFetchingSuccess(responce.data));
      await dispatch(fetchAuthUser(authData));
    } catch (error: any) {
      dispatch(authSlice.actions.authFetchingError(error.message));
    }
  };

export const fetchAuthUser =
  (authData: IAuthData) => async (dispatch: AppDispatch) => {
    try {
      const responce = await axios.get<IUser[]>(`${STORE_URL}/users`);
      const userFind = responce.data.find(
        (user) => user.username === authData.username
      );
      if (userFind) {
        dispatch(authSlice.actions.authUserFething(userFind));
      }
    } catch (error: any) {
      dispatch(authSlice.actions.authFetchingError(error));
    }
  };
