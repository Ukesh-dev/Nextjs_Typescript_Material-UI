import { createTheme, PaletteMode } from '@mui/material';
import { css } from '@emotion/react';
// import { amber, deepOrange, green, grey, red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
// import { PaletteOptions} from "@mui/material";
// export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;
// export const DEFAULT_THEME : AllowedTheme = "dark"

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBlock: '.6rem 0',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
  },

  palette: {
    primary: {
      main: '#2a489f3',
    },
    warning: green,
    secondary: green,
  },
});

export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    h1: {
      fontSize: '1.4rem',
      fontWeight: 600,
      marginBlock: '.6rem 0',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
  },
  palette: {
    mode,
    // ...(mode === 'light'
    //   ? {
    //       // palette values for light mode
    //       primary: {
    //         main: '#bada55',
    //       },
    //       // divider: amber[200],
    //       text: {
    //         primary: grey[900],
    //         secondary: grey[800],
    //       },
    //     }
    //   : {
    //       // palette values for dark mode
    //       primary: {
    //         main: '#ccccc',
    //       },
    //       // divider: deepOrange[700],
    //       background: {
    //         // default: deepOrange[900],
    //         // paper: deepOrange[900],
    //       },
    //       text: {
    //         primary: '#000',
    //         secondary: grey[500],
    //       },
    //     }),
  },
});
export const globalStyles = css`
  :root {
    --background: #fff;
    --foreground: black;
    --navbg: #102030;
    --cardbg: #fff;
  }
  [data-theme='dark'] {
    --background: #000;
    --navbg: #102030;
    --cardbg: #121212;
    --foreground: blackbody {

    }
  }
  body {
    background-color: var(--background);
    color: var(--foreground);
  }
`;
