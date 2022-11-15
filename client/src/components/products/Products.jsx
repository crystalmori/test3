import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";
import useStyles from "./styles";
import "./products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const classes = useStyles();

  const options = [
    { value: "lastAdded", text: "Last added" },
    { value: "lowToHigh", text: "Price: low to high" },
    { value: "highToLow", text: "Price: high to low" },
  ];

  return (
    <>
      <div className="home-page-container">
        <div className="product-title">
          <h1 className="title-left">Products</h1>
          <div className="title-right">
            <select className="drop-down">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            <Link to="/create">
              <button className="add-product">Add Product</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

// const Products = ({ products, onAddToCart, cart }) => {
//   const classes = useStyles();
//   // console.log(handleQuant("prod_DWy4oGjvYpw6Jx"));

//   // console.log(cart.line_items === undefined);

//   return (
//     <main className={classes.content}>
//       <div className={classes.toolbar} />
//       <Grid container justify="center" spacing={4}>
//         {products.map((product) => (
//           <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
//             <Product
//               product={product}
//               onAddToCart={onAddToCart}
//               cart={cart}
//               // lineItemQunat={lineItemQunat}
//               // handleQuant={handleQuant(product.id)}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </main>
//   );
// };

// export default Products;
//
