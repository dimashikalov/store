import React, { FC } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  BASKET_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
} from "../../../utils/consts";
import { useBasketContext } from "../../../hooks/context";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { authSlice } from "../../../store/auth/authSlice";
////
const RightButtons: FC = () => {
  const { auth } = useAppSelector((state) => state.auth);
  const { basketItems, setBasketItemsList } = useBasketContext();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavigateClick = (path: string): void => {
    navigate(path);
  };

  const handleAuthExit = () => {
    dispatch(authSlice.actions.authExit());
    setBasketItemsList?.([]);
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
        onClick={() => handleNavigateClick(BASKET_ROUTE)}
      >
        <Badge
          badgeContent={basketItems.length ? basketItems.length : 0}
          color="error"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      {auth ? (
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={() => handleNavigateClick(PROFILE_ROUTE)}
          >
            <AccountCircle />
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            sx={{ marginLeft: "10px" }}
            onClick={handleAuthExit}
          >
            <ExitToAppIcon />
          </IconButton>
        </Box>
      ) : (
        <Box sx={{ display: { xs: "none", md: "flex", marginLeft: "15px" } }}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => handleNavigateClick(LOGIN_ROUTE)}
          >
            Войти
          </Button>
        </Box>
      )}
    </>
  );
};

export default RightButtons;
