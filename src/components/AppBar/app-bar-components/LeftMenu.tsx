import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton/IconButton";
import { useAppSelector } from "../../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { CATEGORIES_ROUTE, MAIN_ROUTE } from "../../../utils/consts";

///
type Anchor = "top" | "left" | "bottom" | "right";

const LeftMenu: FC = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const { categories } = useAppSelector((state) => state.products);
  const [categoriesArray, setCategoriesArray] = useState(["Все товары"]);

  const navigate = useNavigate();

  const addAllCategories = (categories: string[]) => {
    setCategoriesArray([...categoriesArray, ...categories]);
  };

  useEffect(() => {
    if (categories) {
      addAllCategories(categories);
    }
  }, [categories]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handlerCategoryNavigation = (path: string): void => {
    if (path === "Все товары") {
      return navigate(MAIN_ROUTE);
    }
    navigate(`${CATEGORIES_ROUTE}/${path}`);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categoriesArray.map((text) => (
          <ListItem key={text} disablePadding title={text}>
            <ListItemButton onClick={() => handlerCategoryNavigation(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <div>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </div>
    </>
  );
};

export default LeftMenu;
