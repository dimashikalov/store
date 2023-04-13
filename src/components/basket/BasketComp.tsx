import { Button, Container, Grid, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { useBasketContext } from "../../hooks/context";
import BasketItem from "../basketItem/BasketItem";
import { IBasketItem } from "../../models/IBasket";

const BasketComp: FC = () => {
  const { basketItems } = useBasketContext();
  const totalCost: number = useMemo(() => {
    let result = basketItems.reduce((sum: number, item: IBasketItem) => {
      return sum + item.count * item.basketItem.price;
    }, 0);
    return Math.ceil(result);
  }, [basketItems]);

  return (
    <Container fixed>
      <Typography variant="h4" textAlign="center" margin="10px">
        Корзина товаров
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        {basketItems.map((item) => (
          <BasketItem item={item} key={item.basketItem.id} />
        ))}
      </Grid>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        flexDirection={"column"}
        mt={5}
      >
        <Grid>
          <Typography>
            Общая стоимость заказа: {totalCost ? totalCost : 0}
          </Typography>
        </Grid>
        <Grid>
          <Button variant="contained" sx={{ width: "300px" }}>
            Купить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasketComp;
