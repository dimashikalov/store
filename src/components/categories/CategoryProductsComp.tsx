import { Container, Grid, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import { CardList } from "../cardList/CardList";
import { useParams } from "react-router-dom";
import {
  fetchSingleProducts,
  fetchCategoryProducts,
} from "../../store/products/productsActionCreator";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Loader from "../loader/Loader";
///

enum CategoryNames {}

const CategoryProductsComp: FC = () => {
  const { categoryProduct, isLoading, error } = useAppSelector(
    (state) => state.products
  );
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(fetchCategoryProducts(params.id));
    }
  }, [params]);

  return (
    <Container fixed>
      <Typography variant="h4" textAlign="center" margin="10px">
        {params.id}
      </Typography>
      <Grid container>
        {categoryProduct && <CardList arrayProducts={categoryProduct} />}
        {isLoading && (
          <Grid container justifyContent="center" alignItems="center">
            <Loader />
          </Grid>
        )}
        {error && <Typography>{error}</Typography>}
      </Grid>
    </Container>
  );
};

export default CategoryProductsComp;
