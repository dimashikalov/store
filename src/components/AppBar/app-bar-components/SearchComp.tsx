import React, { FC, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import AlertPopUp from "../../alertPopUp/AlertPopUp";
import { getSearchProducts } from "../../../store/products/productsActionCreator";
/////
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchComp: FC = () => {
  const [value, setValue] = useState("");
  const { workArray } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (value === "") return workArray;
      console.log("seacrh", value);

      const searchProduct = workArray.filter((item) => {
        return item.title.toLowerCase().includes(value);
      });

      dispatch(getSearchProducts(searchProduct));
      setValue("");
    }
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search on page…"
        inputProps={{ "aria-label": "search" }}
        value={value}
        onChange={handleValue}
        onKeyDown={handleSearch}
      />
    </Search>
  );
};

export default SearchComp;
