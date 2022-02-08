import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Container,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import { ButtonGroup } from "./NavbarStyles";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { css } from "@emotion/react";

// const appBarr = css`
//   background-color: var(--foreground);

//   min-height: 64px;
// `;
// const AppBarrr = styled(AppBar)`
//   background: red;
//   width: 200px;
//   aspect-ratio: 1;
// `;

import Link from "next/link";
import ThemeUpdater from "../ThemeUpdater";
// import useStyles from "../../utils/styles";
// import { Button } from "./NavbarStyles";
const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "primary.main", backgroundImage: "none" }}
    >
      <Container sx={{ padding: { md: "0px" } }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <Typography
              variant="h4"
              component="a"
              sx={{
                fontSize: "2rem",
                cursor: "pointer",
                fontWeight: "bold",
                letterSpacing: "0.1rem",
              }}
            >
              Amazona
            </Typography>
          </Link>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ThemeUpdater />
            <Button
              sx={{ fontSize: "1rem", textTransform: "none", color: "#fff" }}
              startIcon={<ShoppingCartOutlinedIcon />}
            >
              <Link href="/cart">
                <Typography variant="subtitle1" component="a">
                  Cart
                </Typography>
              </Link>
            </Button>
            <Button
              color="secondary"
              sx={{ fontSize: "1rem", textTransform: "none", color: "#fff" }}
              startIcon={<LoginIcon />}
            >
              <Link href="/cart">
                <Typography variant="subtitle1" component="a">
                  Log In
                </Typography>
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
