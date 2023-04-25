import { useContext } from "react";
import { BasketContext } from "../context/basket/basketContext";

export const useBasketContext = () => useContext(BasketContext);
