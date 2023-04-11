import { Button, Container, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { useBasketContext } from "../../hooks/context";
import { IProduct } from "../../models/IProduct";
import { IBasketItem } from "../../models/IBasket";

const BasketComp: FC = () => {
  const { basketItems, deleteBasketItem } = useBasketContext();

  const handleDeleteBasketItem = (item: IBasketItem) => {
    deleteBasketItem?.(item);
  };
  console.log("basket");

  return (
    <Container fixed>
      <Typography variant="h4" textAlign="center" margin="10px">
        Корзина товаров
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {basketItems.map((item) => (
          <Grid item>
            <Typography variant="h6">{item.basketItem.title}</Typography>
            <Typography variant="h6">
              Количество товара: {item.count}
            </Typography>
            <Button variant="text" onClick={() => handleDeleteBasketItem(item)}>
              Удалить товар
            </Button>
            <hr />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BasketComp;
