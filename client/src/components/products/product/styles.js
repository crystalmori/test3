import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },

  productsBg: {
    backgroundColor: "red",
  },

  cardItem: {
    // box-sizing: border-box,

    boxSizing: "border-box",
    position: "absolute",
    width: 242,
    height: 303,

    background: "#ffffff",
    border: 1,
    border: "solid",
    border: " #cccccc",
    borderRadius: 4,
  },

  cardImg: {
    position: "absolute",
    width: 218,
    height: 198,
    backgroundColor: "#c4c4c4",
    left: 11,
    top: 10,
  },

  cardTitle: {
    position: "absolute",
    width: 191,
    height: 21,
    left: 11,
    top: 210,

    fontFamily: "Inter",

    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 24,
    /* or 171% */

    display: "flex",
    alignItems: "center",

    color: "#6B7280",
  },

  cardPrice: {
    position: "absolute",
    width: 191,
    height: 21,
    left: 0,
    top: 230,

    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    /* or 150% */

    display: "flex",
    alignItems: "center",

    color: " #111827",
  },

  addBtn: {
    boxSizing: "border-box",
    position: "absolute",
    width: 110,
    height: 26,
    left: 10,
    top: 255,

    background: "#5048E5",
    border: 1,
    border: "solid",
    border: "#FFFFFF",
    borderRadius: 4,

    // Text add
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 10,
    lineHeight: 24,
    /* identical to box height, or 240% */

    display: "flex",
    alignItems: "center",

    color: "#FFFFFF",
  },

  editBtn: {
    boxSizing: "border-box",

    position: "absolute",
    width: 102,
    height: 26,
    left: 145,
    top: 255,

    background: "#FFFFFF",
    border: 1,
    border: "solid",
    border: "#CCCCCC",
    borderRadius: 4,

    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 10,
    lineHeight: 24,
    /* identical to box height, or 240% */

    display: "flex",
    alignItems: "center",

    color: "#535353",
  },
}));
