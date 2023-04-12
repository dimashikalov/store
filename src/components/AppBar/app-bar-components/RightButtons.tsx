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
////
const RightButtons: FC = () => {
  const isAuth = true;
  const { basketItems } = useBasketContext();

  const navigate = useNavigate();

  const handleNavigateClick = (path: string): void => {
    navigate(path);
  };
  return (
    <>
      {isAuth ? (
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
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
            // onClick={() => handleNavigateClick(PROFILE_ROUTE)}
          >
            <ExitToAppIcon />
          </IconButton>
        </Box>
      ) : (
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
