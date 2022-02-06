import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#fff",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    letterSpacing: "3px",
    fontSize: "1.5rem",
  },
  main: {
    minHeight: "100vh",
  },
  button: {
    backgroundColor: "#203040",
    color: "#fff",
    "&:hover": {
      filter: "brightness(100px)",
      backgroundColor: "gray",
    },
  },

  images: {
    // width: "100%",
    objectFit: "cover",
  },
});

export default useStyles;
