import { Grid } from "@mui/material";
import React, { FC } from "react";
import { IProduct } from "../../models/IProduct";
import CardItem from "../cardItem/CardItem";

interface CardListProps {
  arrayProducts: IProduct[];
}

export const CardList: FC<CardListProps> = ({ arrayProducts }) => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {arrayProducts.map((product) => (
        <Grid item key={product.id}>
          <CardItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
