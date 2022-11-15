import React, { Component, useEffect, useState } from "react";
import useStyles from "./styles";

import { commerce } from "../../../lib/commerce";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";

const ProductDetails = ({ onAddToCart, cart }) => {
  const classes = useStyles();

  const [product, setProduct] = useState({});

  const fetchProduct = async (id) => {
    setProduct(await commerce.products.retrieve(id));
  };

  const handleAddToCart = () => onAddToCart(product.id, 1);
  // console.log(cart.line_items);

  const handleRemoveCart = () => onAddToCart(product.id, -1);

  useEffect(() => {
    console.log("is triggle");
    // console.log("this is id", window.location.pathname);
    const id = window.location.pathname.split("/");
    fetchProduct(id[1]);
  }, []);

  // console.log("this is product from app.js", product)

  return (
    <>
      <h2 className={classes.header}>Product Details</h2>
      <div className="detailContainer">
        <Grid container justify="center" spacing={2} columns={16}>
          <>
            <Card>
              {product.image === undefined ? (
                <CardMedia
                  className={classes.media}
                  image={product.image.url}
                  title={product.name}
                />
              ) : (
                <CardMedia className={classes.media} title={product.name} />
              )}
            </Card>
            <Card>
              <CardContent className={classes.right}>
                <Typography gutterBottom variant="h6">
                  {product.name}
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  variant="body2"
                  color="textSecondary"
                />

                <div className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    {/* ${product.price.formatted} */}
                  </Typography>
                </div>
              </CardContent>
              <CardActions disableSpacing className={classes.cardActions}>
                <div className={classes.buttons}>
                  <Button type="button" size="small" onClick={handleRemoveCart}>
                    -
                  </Button>

                  {/* {cart.line_items.map((item) => {
                    {
                      item.product_id == product.id ? (
                        <Typography key={item.id}>
                          &nbsp;{item.quantity}
                          &nbsp;
                        </Typography>
                      ) : (
                        <Typography key={item.id}>
                          &nbsp;{0}
                          &nbsp;
                        </Typography>
                      );
                    }
                  })} */}

                  <Typography>
                    &nbsp;{0}
                    &nbsp;
                  </Typography>
                  <Button type="button" size="small" onClick={handleAddToCart}>
                    +
                  </Button>

                  <Button type="button" size="small">
                    Edit
                  </Button>
                </div>
              </CardActions>
            </Card>
          </>
        </Grid>
      </div>
    </>
  );
};

export default ProductDetails;
