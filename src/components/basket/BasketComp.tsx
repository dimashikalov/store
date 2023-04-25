import { Button, Container, Grid, Typography } from "@mui/material";
import { FC, useMemo, useState } from "react";
import { useBasketContext } from "../../hooks/context";
import BasketItem from "../basketItem/BasketItem";
import { IBasketItem } from "../../models/IBasket";
import { useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/consts";
import ModalWindow from "../modalWindow/ModalWindow";

const BasketComp: FC = () => {
  const { basketItems, setBasketItemsList } = useBasketContext();
  const { auth } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const totalCost: number = useMemo(() => {
    let result = basketItems.reduce((sum: number, item: IBasketItem) => {
      return sum + item.count * item.basketItem.price;
    }, 0);
    return Math.ceil(result);
  }, [basketItems]);

  const handleClickBuy = () => {
    if (!auth) navigate(LOGIN_ROUTE);
    handleOpenModalWindow();
  };

  const handleOpenModalWindow = () => {
    setOpen(true);
  };

  const handleCloseModalWindow = () => {
    setOpen(false);
    setBasketItemsList?.([]);
  };

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
            Общая стоимость заказа: {totalCost ? totalCost : 0} y.e
          </Typography>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            sx={{ width: "300px" }}
            onClick={handleClickBuy}
            disabled={basketItems.length ? false : true}
          >
            {auth ? "Купить" : "Авторизируйтесь для покупки"}
          </Button>
        </Grid>
        <ModalWindow
          open={open}
          onClose={handleCloseModalWindow}
          modalMessage="Здесь должна быть логика покупки, но для этого надо подключаться к сервисам оплаты"
        />
      </Grid>
    </Container>
  );
};

export default BasketComp;
