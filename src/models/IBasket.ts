import { IProduct } from "./IProduct";

export interface IBasketItem {
  basketItem: IProduct;
  count: number;
}

export interface IBasketContext {
  basketItems: IBasketItem[];
  addBasketItem: (basketItem: IProduct) => void;
  deleteBasketItem?: (basketItem: IBasketItem) => void;
  setBasketItemsList?: ([]: IBasketItem[]) => void;
}
