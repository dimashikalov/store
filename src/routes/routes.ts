import AboutPage from "../pages/AboutPage";
import BasketPage from "../pages/BasketPage";
import CategoriesPage from "../pages/CategoriesPage";
import LoginPage from "../pages/LoginPage";
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
  ABOUT_ROUTE,
} from "../utils/consts";

export const authRoutes = [
  {
    path: PROFILE_ROUTE,
    Element: ProfilePage,
  },
];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Element: MainPage,
  },
  {
    path: LOGIN_ROUTE,
    Element: LoginPage,
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
    path: BASKET_ROUTE,
    Element: BasketPage,
  },
  {
    path: ABOUT_ROUTE,
    Element: AboutPage,
  },
  {
    path: "*",
    Element: MainPage,
  },
];
