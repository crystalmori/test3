import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    width: 10,
    height: 10,
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
  cardContainer: {
    width: "400px",
    height: "150px",
  },
}));
