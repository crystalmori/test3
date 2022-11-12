import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  header: {
    marginTop: "80px",
    marginLeft: "80px",
    marginBottom: "40px",
  },
  container: {
    marginLeft: "80px",
    marginTop: "100px",
  },
  detailContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: 350,
    width: 400,
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
}));
