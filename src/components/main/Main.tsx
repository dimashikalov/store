import { Container, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProducts } from "../../store/products/productsActionCreator";
import CardItem from "../cardItem/CardItem";
import { CardList } from "../cardList/CardList";

const Main = () => {
  const { products, isLoading, error } = useAppSelector(
    (state) => state.products
  );

  return (
    <Container fixed>
      <CardList arrayProducts={products} />
      {isLoading && <h1>Loading...</h1>}
    </Container>
  );
};

export default Main;
