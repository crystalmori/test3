import React from "react";
import { useState } from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Typography,
//   Button,
// } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.cardItem}>
        <Card.Img
          className={classes.cardImg}
          variant="top"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <Card.Body>
          <Card.Title className={classes.cardTitle}>Card Title</Card.Title>
          <Card.Text className={classes.cardPrice}>$499.0</Card.Text>
          <Button variant="primary" className={classes.addBtn}>
            Add
          </Button>
          <Button variant="primary" className={classes.editBtn}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;

// const Product = ({ product, onAddToCart, cart }) => {
//   const classes = useStyles();

//   const handleAddToCart = () => onAddToCart(product.id, 1);

//   const handleRemoveCart = () => onAddToCart(product.id, -1);

//   const { user } = useSelector((state) => state.auth);
//   // console.log(user);

//   // console.log(handleQuant(product.id));
//   // console.log(cart.line_items);
//   const line_items = cart.line_items;
//   // console.log(line_items === undefined);
//   // const quantDic = {};

//   // cart.line_items?.forEach((line_item) => {
//   //   if (line_item.product_id === product.id && line_item.quantity > 0) {
//   //     quantDic.productId = product.id;
//   //     quantDic.quant = line_item.quantity;
//   //   }
//   // });

//   // const handleQuant = (product.id) => {
//   //   if (quantDic && quantDic.length > 0 && quantDic.get(productId) === product.id) {
//   //     console.log(quantDic);
//   //   }
//   // };
//   // handleQuant();

//   // console.log(quantDic);
//   // console.log(lineItemQunat);

//   // handleQuant(product.id);
//   return (
//     <Card
//       className={classes.root}
//       onClick={() => {
//         // console.log(product.id);
//       }}
//     >
//       <CardMedia
//         component={Link}
//         to={`/${product.id}`}
//         className={classes.media}
//         image={product.image.url}
//         title={product.name}
//       />
//       <CardContent>
//         {/* <Typography
//           dangerouslySetInnerHTML={{ __html: product.description }}
//           variant="body2"
//           color="textSecondary"
//         /> */}
//         <Typography gutterBottom variant="h6">
//           {product.name}
//         </Typography>

//         <div className={classes.cardContent}>
//           <Typography gutterBottom variant="h5">
//             ${product.price.formatted}
//           </Typography>
//         </div>
//       </CardContent>
//       <CardActions disableSpacing className={classes.cardActions}>
//         {/* <Button
//           variant="contained"
//           aria-label="Add to Cart"
//           onClick={handleAddToCart}
//         >
//           Add
//         </Button> */}

//         <div className={classes.buttons}>
//           <Button type="button" size="small" onClick={handleRemoveCart}>
//             -
//           </Button>

//           {line_items?.map((item) => {
//             item.product_id == product.id ? (
//               <Typography key={item.id}>
//                 &nbsp;{item.quantity}
//                 &nbsp;
//               </Typography>
//             ) : (
//               <Typography key={item.id}>
//                 &nbsp;{0}
//                 &nbsp;
//               </Typography>
//             );
//           })}

//           <Typography>
//             &nbsp;{0}
//             &nbsp;
//           </Typography>
//           <Button type="button" size="small" onClick={handleAddToCart}>
//             +
//           </Button>

//           {user ? (
//             <Button type="button" size="small">
//               Edit
//             </Button>
//           ) : (
//             () => {}
//           )}
//         </div>
//       </CardActions>
//     </Card>
//   );
// };

// export default Product;
