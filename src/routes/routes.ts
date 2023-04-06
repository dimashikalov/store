import BasketPage from "../pages/BasketPage";
import CategoriesPage from "../pages/CategoriesPage";
import MainPage from "../pages/MainPage";
import ProductItemPage from "../pages/ProductItemPage";
import ProfilePage from "../pages/ProfilePage";
import {
  BASKET_ROUTE,
  CATEGORIES_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PRODUCTS_ITEM_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";

export const authRoutes = [
  {
    path: PROFILE_ROUTE,
    Element: ProfilePage,
  },
  {
    path: BASKET_ROUTE,
    Element: BasketPage,
  },
];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Element: MainPage,
  },
  {
    path: CATEGORIES_ROUTE + "/:id",
    Element: CategoriesPage,
  },
  {
    path: PRODUCTS_ITEM_ROUTE + "/:id",
    Element: ProductItemPage,
  },
  {
    path: "*",
    Element: MainPage,
  },
];
