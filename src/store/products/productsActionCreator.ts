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
    dispatch(productsSlice.actions.currentArrayWithProducts());
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

export const fetchCategoryProducts =
  (path: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productsSlice.actions.productsFetching());
      const responce = await axios.get<IProduct[]>(
        `${STORE_URL}/products/category/${path}`
      );
      dispatch(
        productsSlice.actions.productFetchingCategoryProductsSuccess(
          responce.data
        )
      );
      dispatch(productsSlice.actions.currentArrayWithCategoryProducts());
    } catch (e: any) {
      dispatch(productsSlice.actions.productsFetchingError(e.message));
    }
  };

export const getCurrentArrayWithProducts =
  (pathname: string) => (dispatch: AppDispatch) => {
    try {
      if (pathname === "/") {
        return dispatch(productsSlice.actions.currentArrayWithProducts());
      }

      return dispatch(productsSlice.actions.currentArrayWithCategoryProducts());
    } catch (error) {
      console.log("err", error);
    }
  };

export const getSearchProducts =
  (searchArray: IProduct[]) => (dispatch: AppDispatch) => {
    dispatch(productsSlice.actions.searchProducts(searchArray));
  };
