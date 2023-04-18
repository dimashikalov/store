import { Container, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CardList } from "../cardList/CardList";
import Loader from "../loader/Loader";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCurrentArrayWithProducts } from "../../store/products/productsActionCreator";
import { IProduct } from "../../models/IProduct";

const Main: FC = () => {
  const { workArray, isLoading, error } = useAppSelector(
    (state) => state.products
  );

  const [currentArray, setCurrentArray] = useState([] as IProduct[]);

  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getCurrentArrayWithProducts(location.pathname));
  }, [location]);
  useEffect(() => {
    setCurrentArray([...workArray]);
  }, [workArray]);

  return (
    <Container fixed>
      <Typography variant="h4" textAlign="center" margin="10px">
        Главная страница магазина
      </Typography>
      <Grid container>
        <CardList arrayProducts={currentArray} />
        {isLoading && (
          <Grid container justifyContent="center" alignItems="center">
            <Loader />
          </Grid>
        )}
        {currentArray.length === 0 && (
          <Typography>Sorry, no matches to your search</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Main;
