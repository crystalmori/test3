import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Avatar,
  Box,
} from "@material-ui/core";
import useStyles from "../cart/styles";

const CartItems = ({ item, onAddToCart, onDelFromCart }) => {
  const classes = useStyles();
  // console.log(item);

  const handleAddToCart = () => onAddToCart(item.product_id, 1);

  const handleRemoveCart = () => onAddToCart(item.product_id, -1);

  const handleDelFromCart = () => onDelFromCart(item.product_id);

  return (
    <div>
      {/* <image size="tiny" src={item.media.source} /> */}
      {item.quantity > 0 ? (
        <>
          <Card className={classes.cardContainer}>
            <CardMedia
              className={classes.media}
              image={item.image.meta.url}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h8">
                {item.name}
              </Typography>
              <div className={classes.cardContent}>
                <Typography gutterBottom variant="h10">
                  {item.line_total.formatted_with_symbol}
                </Typography>
              </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
              <div className={classes.buttons}>
                <Button onClick={handleRemoveCart} type="button" size="small">
                  -
                </Button>
                <Typography>
                  &nbsp;{item.quantity}
                  &nbsp;
                </Typography>
                <Button onClick={handleAddToCart} type="button" size="small">
                  +
                </Button>
                <Button type="button" size="small" onClick={handleDelFromCart}>
                  Remove
                </Button>
              </div>
            </CardActions>
          </Card>

          {/* <Box
            key={item.id}
            display="flex"
            sx={{ pt: 2, pb: 2 }}
            alignItems="start"
            justifyContent={"space-between"}
          >
            <Avatar src={item.image} sx={{ width: 96, height: 96, mr: 2 }} />
            <Box display="flex" flexDirection={"column"}>
              <Typography variant="h8">{item.name}</Typography>
              <Typography variant="body1" justifyContent={"end"}>
                {item.line_total.formatted_with_symbol}
              </Typography>
            </Box>
          </Box>
          <div className={classes.buttons}>
            <Button type="button" size="small">
              -
            </Button>

            <Typography>
              &nbsp;{2}
              &nbsp;
            </Typography>
            <Button type="button" size="small">
              +
            </Button>

            <Button type="button" size="small">
              Edit
            </Button> */}
          {/* </div> */}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartItems;
