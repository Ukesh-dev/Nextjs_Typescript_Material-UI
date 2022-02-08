import { useTheme } from "next-themes";
import { createTheme, GlobalStyles } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { globalStyles } from "../../theme";
import React, { FC, useEffect } from "react";
import { grey, red } from "@mui/material/colors";

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          h1: {
            fontSize: "2rem",
          },
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: red[800],
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
                  default: "#000",
                  // default: deepOrange[900],
                  // paper: deepOrange[900],
                },
                text: {
                  primary: red[500],
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode]
  );

  useEffect(() => {
    resolvedTheme === "light" ? setMode("light") : setMode("dark");
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
