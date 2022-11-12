import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";
import useStyles from "./styles";

const Products = ({ products, onAddToCart, cart }) => {
  const classes = useStyles();
  // console.log(handleQuant("prod_DWy4oGjvYpw6Jx"));

  // console.log(cart.line_items === undefined);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product
              product={product}
              onAddToCart={onAddToCart}
              cart={cart}
              // lineItemQunat={lineItemQunat}
              // handleQuant={handleQuant(product.id)}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
