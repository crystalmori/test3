import React from "react";
import { FaUser } from "react-icons/fa";
import useStyles from "../navbar/headerStyle";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/authSlice";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

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
      <nav className="nav-bar">
        <div className="nav-title">
          <span id="bigTitle">Management</span>
          <span id="bigTitle-shrink">M</span>
          <span id="smallTitle">Chuwa</span>
        </div>

        <div className="search-bar">
          <input className="nav-search" type="text" placeholder="search" />
          <button className="search-btn">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="nav-right">
          <div className="nav-sign-in">
            <i id="user-icon" className="fa-solid fa-user"></i>
            <FaUser />
            {user ? (
              <a onClick={onLogout}>Sign Out</a>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
          </div>
        </div>
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
      </nav>
    </>
  );
};

export default Header;
