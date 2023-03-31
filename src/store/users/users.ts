import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { STORE_URL } from "../../utils/api";
import { IUser } from "../../models/IUser";
import { ServerResponse } from "http";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: `${STORE_URL}`,
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], void>({
      query: () => ({
        url: "users",
      }),
    }),
  }),
});

export const { useFetchAllUsersQuery } = usersApi;
