import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  Box,
  Container,
} from "@mui/material";
import { ButtonGroup } from "./NavbarStyles";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AbcTwoToneIcon from "@mui/icons-material/AbcTwoTone";

import Link from "next/link";
// import useStyles from "../../utils/styles";
// import { Button } from "./NavbarStyles";
const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
      <Container
        sx={{ backgroundColor: "transparent", padding: { md: "0px" } }}
      >
        <Toolbar
          sx={{
            width: "100%",
            backgrondColor: "green",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <a>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  letterSpacing: "0.1rem",
                  color: "#fff",
                }}
              >
                Amazona
              </Typography>
              <Typography variant="h1">A header</Typography>
            </a>
          </Link>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup
              sx={{ color: "#fff", fontSize: "1rem", textTransform: "none" }}
              startIcon={<ShoppingCartOutlinedIcon />}
            >
              <Link href="/cart">
                <a>Cart</a>
              </Link>
            </ButtonGroup>
            <ButtonGroup
              sx={{ color: "#fff", fontSize: "1rem", textTransform: "none" }}
              startIcon={<LoginIcon />}
            >
              <Link href="/cart">
                <a>Log In</a>
              </Link>
            </ButtonGroup>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
