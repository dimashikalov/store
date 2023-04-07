import { Container, Grid, Paper, Typography } from "@mui/material";
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
      <Typography variant="h4" textAlign="center" margin="10px">
        Главная страница магазина
      </Typography>
      <Grid container>
        <CardList arrayProducts={products} />
        {isLoading && <h1>Loading...</h1>}
      </Grid>
    </Container>
  );
};

export default Main;
