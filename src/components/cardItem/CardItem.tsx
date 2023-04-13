import React, { FC } from "react";
import { IProduct } from "../../models/IProduct";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./cardItemCss.css";
import { useNavigate } from "react-router-dom";
import { PRODUCTS_ITEM_ROUTE } from "../../utils/consts";
import { useBasketContext } from "../../hooks/context";
import AlertPopUp from "../alertPopUp/AlertPopUp";
////
interface CardItemProps {
  product: IProduct;
}

const CardItem: FC<CardItemProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addBasketItem } = useBasketContext();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const navigateToCardItem = () => {
    navigate(`${PRODUCTS_ITEM_ROUTE}/${product.id}`);
  };

  const handleAddToBasket = () => {
    addBasketItem(product);
    handleClick();
  };

  return (
    <>
      <Card sx={{ maxWidth: 300, height: 500 }}>
        <CardActionArea onClick={navigateToCardItem}>
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
              Стоимость: {product.price} y.e
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleAddToBasket}>
            Добавить в корзину
          </Button>
        </CardActions>
      </Card>
      {open && <AlertPopUp open={open} handleClose={handleClose} />}
    </>
  );
};

export default CardItem;
