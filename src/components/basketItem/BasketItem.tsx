import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { useBasketContext } from "../../hooks/context";
import { IBasketItem } from "../../models/IBasket";
import "./basketItemCss.css";

////
interface BasketItemProps {
  item: IBasketItem;
}

const BasketItem: FC<BasketItemProps> = ({ item }) => {
  const { deleteBasketItem, addBasketItem } = useBasketContext();

  const handleDeleteBasketItem = (item: IBasketItem) => {
    deleteBasketItem?.(item);
  };
  const handleAddToBasket = (item: IBasketItem) => {
    addBasketItem(item.basketItem);
  };
  return (
    <Grid container justifyContent={"center"} mt={3}>
      <Card sx={{ display: "flex", width: 500 }}>
        <CardMedia
          component="img"
          sx={{ width: 100, height: 100 }}
          image={item.basketItem.image}
          alt={item.basketItem.title}
        />
        <Box width={"100%"}>
          <Typography variant="h6" className="rowsInBasketItemTitle">
            {item.basketItem.title}
          </Typography>

          <Typography variant="subtitle1">
            Количество товара: {item.count}
          </Typography>

          <Typography variant="subtitle1">
            Стоимость: {item.count * item.basketItem.price}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button variant="text" onClick={() => handleDeleteBasketItem(item)}>
              Удалить товар
            </Button>
            <Button variant="text" onClick={() => handleAddToBasket(item)}>
              Добавить товар
            </Button>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default BasketItem;
