import React, { FC } from "react";
import { IProduct } from "../../models/IProduct";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./cardItemCss.css";
////
interface CardItemProps {
  product: IProduct;
}

const CardItem: FC<CardItemProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300, height: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="rowsInCardItemTitle"
          >
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="rowsInCardItemDescription"
          >
            {product.description}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{ marginTop: "5px" }}
          >
            Категория товара: {product.category}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
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
