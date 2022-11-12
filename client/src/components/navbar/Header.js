import React from "react";
import { FaUser } from "react-icons/fa";
import useStyles from "../navbar/headerStyle";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/authSlice";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ setShowModal, totalItems, setIsDrawerOpen }) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // console.log(user);

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <h4>Management</h4>
            <div className={classes.chuwa}>Chuwa</div>
          </Typography>
          <Typography
            variant="h6"
            className={classes.inputInput}
            color="inherit"
          >
            <input placeholder="search" />
          </Typography>
          {/* <SearchIcon /> */}
          <div className={classes.grow} />
          <FaUser />
          {/* <a onClick={() => setShowModal(true)}> */}
          {/* Sign In</a> */}
          {user ? (
            <a onClick={onLogout}>Sign Out</a>
          ) : (
            <Link to="/login">Sign In</Link>
          )}

          <div className={classes.button}>
            <IconButton
              aria-label="Show cart items"
              color="inherit"
              onClick={() => {
                setIsDrawerOpen(true);
              }}
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
