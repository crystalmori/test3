import React from "react";
import { Drawer, Typography, Grid, Button, Box } from "@material-ui/core";

import useStyles from "../cart/styles";
import CartItems from "./CartItems";

const Cart = ({
  isDrawerOpen,
  setIsDrawerOpen,
  cart,
  onAddToCart,
  onDelFromCart,
}) => {
  const classes = useStyles();
  //   console.log(cart);
  const line_items = cart.line_items;
  //   console.log(line_items);
  //   line_items.map((lineItem) => {
  //     console.log(lineItem.product_name);
  //   });

  return (
    <div>
      <Drawer
        open={isDrawerOpen}
        anchor="left"
        variant="temporary"
        onClose={() => setIsDrawerOpen(false)}
      >
        <Typography variant="h6" component="div">
          Cart
        </Typography>

        {line_items?.map((item, index) => (
          <CartItems
            key={index}
            onAddToCart={onAddToCart}
            onDelFromCart={onDelFromCart}
            item={item}
          />
        ))}
        <Typography>Subtal</Typography>
        <Typography>Tax</Typography>
        <Typography>Discount</Typography>
        <Typography>Estimated Total</Typography>
        <Button>Continue to Checkout</Button>
      </Drawer>
    </div>
  );
};

export default Cart;
