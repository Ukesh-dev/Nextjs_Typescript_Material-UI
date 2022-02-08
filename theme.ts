import { createTheme, PaletteMode } from "@mui/material";
import { css } from "@emotion/react";
import { amber, deepOrange, green, grey, red } from "@mui/material/colors";
// import { PaletteOptions} from "@mui/material";
// export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;
// export const DEFAULT_THEME : AllowedTheme = "dark"

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "1.5rem",
      fontWeight: 600,
      marginBlock: ".6rem 0",
    },
    h2: {
      fontSize: "1.4rem",
      fontWeight: 400,
      margin: "1rem 0",
    },
  },

  palette: {
    primary: {
      main: "#2a489f3",
    },
    warning: green,
    secondary: green,
  },
});

export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    h1: {
      fontSize: "1.4rem",
      fontWeight: 600,
      marginBlock: ".6rem 0",
    },
    h2: {
      fontSize: "1.4rem",
      fontWeight: 400,
      margin: "1rem 0",
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#bada55",
          },
          // divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#bada55",
          },
          // divider: deepOrange[700],
          background: {
            // default: deepOrange[900],
            // paper: deepOrange[900],
          },
          text: {
            primary: "#000",
            secondary: grey[500],
          },
        }),
  },
});
export const globalStyles = css`
  :root {
    body {
      background-color: #bada55;
      color: #121212;
    }
  }
  [data-theme="dark"] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`;
