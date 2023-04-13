import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";

import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchComp from "./app-bar-components/SearchComp";
import RightButtons from "./app-bar-components/RightButtons";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { useState } from "react";
import LeftMenu from "./app-bar-components/LeftMenu";

////

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const homeRedirect = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <LeftMenu />
            <Typography
              onClick={homeRedirect}
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block", cursor: "pointer" } }}
            >
              SHIKALOV STORE
            </Typography>

            <SearchComp />

            <Box sx={{ flexGrow: 1 }} />

            <RightButtons />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
