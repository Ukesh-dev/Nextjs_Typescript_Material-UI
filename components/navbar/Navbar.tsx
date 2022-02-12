import { AppBar, Typography, Box, Container, Button } from '@mui/material';
// import styled from "@emotion/styled";
// import { ButtonGroup } from './NavbarStyles';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { css } from '@emotion/react';
// import styled from "@emotion/styled";
// import Typography from '@mui/material/Typography';
// import { red, green, blue } from '@mui/material/colors';

// const Root = styled('div')(({ theme }) => ({
//   padding: theme.spacing(1),
//   [theme.breakpoints.down('md')]: {
//     backgroundColor: red[500],
//   },
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: blue[500],
//   },
//   [theme.breakpoints.up('lg')]: {
//     backgroundColor: green[500],
//   },
// }));

// const appBarr = css`
//   background-color: var(--foreground);

//   min-height: 64px;
// `;
// const AppBarrr = styled(AppBar)`
//   background: red;
//   width: 200px;
//   aspect-ratio: 1;
// `;

import Link from 'next/link';
import ThemeUpdater from '../ThemeUpdater';
// import { flexbox } from '@mui/system';
import { useGlobalContext } from '../../context';
// import useStyles from "../../utils/styles";
// import { Button } from "./NavbarStyles";
// const AppBarrr = styled;
const Navbar = () => {
  const { state, dispatch } = useGlobalContext();
  const handleClick = () => {
    if (state.darkmode === true) {
      dispatch({ type: 'TEST' });
    }
  };
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: 'primary.main',
        padding: 0,
        backgroundImage: 'none',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            minHeight: '64px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* <Toolbar
          sx={{
            justifyContent: "space-between",
            paddingLeft: "100px",
          }}
        > */}
          <Link href="/" passHref>
            <Typography
              variant="h4"
              component="a"
              sx={{
                fontSize: '2rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                letterSpacing: '0.1rem',
              }}
            >
              Amazona
            </Typography>
          </Link>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ThemeUpdater />
            <Button
              sx={{ fontSize: '1rem', textTransform: 'none', color: '#fff' }}
              startIcon={<ShoppingCartOutlinedIcon />}
            >
              <Link href="/cart" passHref>
                <Typography
                  // variant="subtitle1"
                  component="a"
                  sx={{
                    color: {
                      xs: 'green',
                      sm: 'red',
                    },
                  }}
                  css={css`
                    @media (min-width: 500px) {
                      font-size: 10rem;
                      color: green;
                    }
                  `}
                >
                  Cart
                </Typography>
              </Link>
            </Button>
            <Button
              onClick={handleClick}
              color="secondary"
              sx={{
                fontSize: '1rem',
                textTransform: 'none',
                display: { xs: 'none', md: 'flex' },
                color: '#fff',
              }}
              startIcon={<LoginIcon />}
            >
              {/* <Link href="/cart"> */}
              <Typography variant="subtitle1" component="a">
                Log In
              </Typography>
              {/* </Link> */}
            </Button>
          </Box>
          {/* </Toolbar> */}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
