import { Container, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import { CardList } from "../cardList/CardList";
import Loader from "../loader/Loader";

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
        {isLoading && (
          <Grid container justifyContent="center" alignItems="center">
            <Loader />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Main;
