import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchSingleProducts } from "../../store/products/productsActionCreator";
import { useParams } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";
import Loader from "../loader/Loader";

const ProductComp: FC = () => {
  const { product, isLoading, error } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSingleProducts(Number(params.id)));
  }, []);

  return (
    <Container fixed>
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        margin={"40px"}
      >
        {isLoading && <Loader />}
        <Typography variant="h4" textAlign="center" margin="10px">
          {product?.title}
        </Typography>
        <Grid item width="500px">
          <ImageListItem>
            <img src={product?.image} alt={product?.title} loading="lazy" />
          </ImageListItem>
        </Grid>
        <Grid item mt={"30px"}>
          <Typography variant="subtitle1">
            Категория товара: {product?.category}
          </Typography>
          <Typography variant="body1" mt={"10px"}>
            {product?.description}
          </Typography>
          <Typography variant="body1" mt={"10px"}>
            Стоимость: {product?.price} y.e
          </Typography>
        </Grid>
        <Grid item mt={"50px"}>
          <Button size="large" color="primary">
            Добавить в корзину
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductComp;
