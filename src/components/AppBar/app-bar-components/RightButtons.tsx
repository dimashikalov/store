import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
////
const RightButtons = () => {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={1} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      ) : (
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button variant="outlined" color="inherit">
            Login
          </Button>
        </Box>
      )}
    </>
  );
};

export default RightButtons;