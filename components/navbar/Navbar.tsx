import { AppBar, Typography, Toolbar } from "@mui/material";
import AbcTwoToneIcon from "@mui/icons-material/AbcTwoTone";

import Link from "next/link";
import useStyles from "../../utils/styles";
const Navbar = ({
  navbar,
  navFunc,
}: {
  navbar: string;
  navFunc: { navbar: string };
}) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={navFunc.navbar}>
      <Toolbar>
        <Link href="/">
          <a>
            <Typography className={classes.brand}>Amazona</Typography>
          </a>
        </Link>
        <div>
          <Link href="/cart">
            <a>
              <AbcTwoToneIcon />
              Cart
            </a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
