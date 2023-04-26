import { Container, Grid, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import { CardList } from "../cardList/CardList";
import { useLocation, useParams } from "react-router-dom";
import {
  fetchSingleProducts,
  fetchCategoryProducts,
  getCurrentArrayWithProducts,
} from "../../store/products/productsActionCreator";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Loader from "../loader/Loader";
///

const CategoryProductsComp: FC = () => {
  const { workArray, isLoading, error } = useAppSelector(
    (state) => state.products
  );
  const params = useParams();
  const dispatch = useAppDispatch();

  const location = useLocation();

  useEffect(() => {
    if (params.id) {
      dispatch(fetchCategoryProducts(params.id));
    }
  }, [params]);

  useEffect(() => {
    dispatch(getCurrentArrayWithProducts(location.pathname));
  }, []);

  return (
    <Container fixed>
      <Typography variant="h4" textAlign="center" margin="10px">
        {params.id}
      </Typography>
      <Grid container>
        {workArray && <CardList arrayProducts={workArray} />}
        {isLoading && (
          <Grid container justifyContent="center" alignItems="center">
            <Loader />
          </Grid>
        )}
        {workArray.length === 0 && (
          <Typography>Sorry, no matches to your search </Typography>
        )}
        {error && <Typography>{error}</Typography>}
      </Grid>
    </Container>
  );
};

export default CategoryProductsComp;
