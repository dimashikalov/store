import React, { FC, useState } from "react";
import { IBasketContext, IBasketItem } from "../../models/IBasket";
import { IProduct } from "../../models/IProduct";

export const BasketContext = React.createContext<IBasketContext>({
  basketItems: [],
  addBasketItem: () => null,
  deleteBasketItem: () => null,
  setBasketItemsList: () => null,
});

interface IBasketProvider {
  children: React.ReactNode | React.ReactElement;
}

const BasketProvider: FC<IBasketProvider> = ({ children }) => {
  const [basketItems, setBasketItemsList] = useState<IBasketItem[]>([]);

  const addBasketItem = (product: IProduct) => {
    let basketItemFind = basketItems.find(
      (i) => i.basketItem.id === product.id
    );

    if (basketItemFind) {
      basketItems.map((item) => {
        if (item.basketItem.id === basketItemFind?.basketItem.id) {
          item.count++;
          setBasketItemsList([...basketItems]);
        }
      });
      return;
    }

    let basketItem: IBasketItem = {
      basketItem: product,
      count: 1,
    };
    setBasketItemsList([...basketItems, basketItem]);
  };

  const deleteBasketItem = (basketItem: IBasketItem) => {
    let basketItemFind = basketItems.find(
      (i) => i.basketItem.id === basketItem.basketItem.id
    );
    if (basketItemFind?.count === 1) {
      return setBasketItemsList(
        basketItems.filter(
          (i) => i.basketItem.id !== basketItemFind?.basketItem.id
        )
      );
    }
    if (basketItemFind) {
      basketItems.map((item) => {
        if (item.basketItem.id === basketItemFind?.basketItem.id) {
          item.count--;
          setBasketItemsList([...basketItems]);
        }
      });
    }
  };
  return (
    <BasketContext.Provider
      value={{
        basketItems,
        addBasketItem,
        deleteBasketItem,
        setBasketItemsList,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
