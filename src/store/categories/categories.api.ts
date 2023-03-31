import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { STORE_URL } from "../../utils/api";
import { IUser } from "../../models/IUser";
import { ServerResponse } from "http";

export interface ICategories {
  categoties: string[];
}

export const categotiesApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: `${STORE_URL}`,
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<ICategories, void>({
      query: () => ({
        url: "categories",
      }),
    }),
  }),
});

export const {} = categotiesApi;
