import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

export interface ProductsState {
  isLoading: boolean;
  error: string;
  products: IProduct[];
  product?: IProduct;
  categories?: string[];
  categoryProduct?: IProduct[];
}

const initialState: ProductsState = {
  isLoading: false,
  error: "",
  products: [],
  categories: [],
  categoryProduct: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true;
    },
    productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
    },
    productsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    productFetchingSingleSuccess(state, action: PayloadAction<IProduct>) {
      state.isLoading = false;
      state.error = "";
      state.product = action.payload;
    },
    productFetchingCategorySuccess(state, action: PayloadAction<string[]>) {
      state.isLoading = false;
      state.error = "";
      state.categories = action.payload;
    },
    productFetchingCategoryProductsSuccess(
      state,
      action: PayloadAction<IProduct[]>
    ) {
      state.isLoading = false;
      state.error = "";
      state.categoryProduct = action.payload;
    },
  },
});
