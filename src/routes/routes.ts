import BasketPage from "../pages/BasketPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import RegistrationPage from "../pages/RegistrationPage";

export const authRoutes = [
  {
    path: "/profile",
    element: ProfilePage,
  },
  {
    path: "/basket",
    element: BasketPage,
  },
];

export const publicRoutes = [
  {
    path: "/main",
    element: MainPage,
  },
  {
    path: "/login",
    element: LoginPage,
  },
  {
    path: "/registration",
    element: RegistrationPage,
  },
];
