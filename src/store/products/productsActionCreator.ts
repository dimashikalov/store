import axios from "axios";
import { AppDispatch } from "../store";
import { STORE_URL } from "../../utils/api";
import { IProduct } from "../../models/IProduct";
import { productsSlice } from "./productsSlice";

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productsSlice.actions.productsFetching());
    const responce = await axios.get<IProduct[]>(`${STORE_URL}/products`);
    dispatch(productsSlice.actions.productsFetchingSuccess(responce.data));
  } catch (e: any) {
    dispatch(productsSlice.actions.productsFetchingError(e.message));
  }
};

export const fetchSingleProducts =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productsSlice.actions.productsFetching());
      const responce = await axios.get<IProduct>(`${STORE_URL}/products/${id}`);
      dispatch(
        productsSlice.actions.productFetchingSingleSuccess(responce.data)
      );
    } catch (e: any) {
      dispatch(productsSlice.actions.productsFetchingError(e.message));
    }
  };

export const fetchCategories = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productsSlice.actions.productsFetching());
    const responce = await axios.get<string[]>(
      `${STORE_URL}/products/categories`
    );
    dispatch(
      productsSlice.actions.productFetchingCategorySuccess(responce.data)
    );
  } catch (e: any) {
    dispatch(productsSlice.actions.productsFetchingError(e.message));
  }
};
