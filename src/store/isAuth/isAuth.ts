import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { STORE_URL } from "../../utils/api";
import { ILogin } from "../../models/ILogin";

interface IToken {
  token: string;
}

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${STORE_URL}/auth/`,
  }),
  endpoints: (build) => ({
    login: build.query<IToken, ILogin>({
      query: (data: ILogin) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginQuery } = authApi;
