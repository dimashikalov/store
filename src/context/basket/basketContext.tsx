import React, { FC, useState } from "react";
import { IBasketContext, IBasketItem } from "../../models/IBasket";
import { IProduct } from "../../models/IProduct";

export const BasketContext = React.createContext<IBasketContext>({
  basketItems: [],
  addBasketItem: () => null,
  deleteBasketItem: () => null,
});

interface IBasketProvider {
  children: React.ReactNode | React.ReactElement;
}

const findItem = (array: any, item: number): boolean => {
  return array.includes(item);
};

const BasketProvider: FC<IBasketProvider> = ({ children }) => {
  const [basketItems, setBasketItemsList] = useState<IBasketItem[]>([]);

  const addBasketItem = (product: IProduct) => {
    let basketItemFind = basketItems.find(
      (i) => i.basketItem.id === product.id
    );

    if (basketItemFind) {
      return basketItemFind.count++;
    }

    let basketItem: IBasketItem = {
      basketItem: product,
      count: 1,
    };
    setBasketItemsList([...basketItems, basketItem]);
  };
  const deleteBasketItem = (product: IProduct) => {};
  return (
    <BasketContext.Provider
      value={{ basketItems, addBasketItem, deleteBasketItem }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
