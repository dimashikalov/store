import React, { FC } from "react";
import { IProduct } from "../../models/IProduct";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

interface CardItemProps {
  product: IProduct;
}

const CardItem: FC<CardItemProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Категория товара: {product.category}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Стоимость: {product.price} руб
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Добавить в корзину
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
