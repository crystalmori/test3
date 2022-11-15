import { useEffect, useState } from "react";
import Footer from "./components/pages/Footer";
import Header from "./components/navbar/Header";
import MyModal from "./components/modal/modal";
import Products from "./components/products/Products";
import { commerce } from "./lib/commerce";
import ProductDetails from "./components/products/productDetails/ProductDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ProductForm from "./components/products/product-form/productForm";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    // console.log("product" , products);
    // console.log("product id from fetchProducts", product.id);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // Remove item from the cart
  const handleDeleteFromCart = async (lineItemId) => {
    if (cart && cart.total_items > 0) {
      setCart(commerce.cart.remove(lineItemId));
    }
  };

  // Function => add products to the cart
  const handleAddToCart = async (productId, quantity) => {
    setCart(await commerce.cart.add(productId, quantity));
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  // console.log(cart);
  // console.log(cart.total_items);
  // console.log(cart.line_items);

  const [showModal, setShowModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const [showUpdateSent, setShowUpdateSent] = useState(false);

  return (
    <>
      <Router>
        <Header
          setShowModal={setShowModal}
          totalItems={cart.total_items}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Products
              // getProductId={getProductId}
              // products={products}
              // onAddToCart={handleAddToCart}
              // cart={cart}
              />
            }
          />

          <Route exact path="/create" element={<ProductForm />} />

          {/*
          <Route
            // exact
            // path="/:productId""
            element={
              <ProductDetails
                onAddToCart={handleAddToCart}
                cart={cart}
                // product={product}
              />
            }
          />
          */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Cart
          cart={cart}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          onAddToCart={handleAddToCart}
          onDelFromCart={handleDeleteFromCart}
        />
      </Router>

      {showUpdatePassword ? (
        <MyModal
          showModel={showModal}
          setShowModal={setShowModal}
          showSignUp={showSignUp}
          showUpdatePassword={showUpdatePassword}
          setShowUpdatePassword={setShowUpdatePassword}
          setShowSignUp={setShowSignUp}
          showUpdateSent={showUpdateSent}
          setShowUpdateSent={setShowUpdateSent}
          modalTitle="Update your password"
          modalButton="Update password"
        />
      ) : showSignUp ? (
        <MyModal
          showModel={showModal}
          setShowModal={setShowModal}
          showSignUp={showSignUp}
          showUpdatePassword={showUpdatePassword}
          setShowUpdatePassword={setShowUpdatePassword}
          setShowSignUp={setShowSignUp}
          showUpdateSent={showUpdateSent}
          setShowUpdateSent={setShowUpdateSent}
          modalTitle="Sign up an account"
          modalButton="Create account"
        />
      ) : (
        <MyModal
          showModel={showModal}
          setShowModal={setShowModal}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
          showUpdatePassword={showUpdatePassword}
          setShowUpdatePassword={setShowUpdatePassword}
          showUpdateSent={showUpdateSent}
          setShowUpdateSent={setShowUpdateSent}
          modalTitle="Sign in to your account"
          modalButton="Sign In"
        />
      )}

      <Footer />
    </>
  );
}

export default App;
