import { useTheme } from "next-themes";
import { createTheme, GlobalStyles } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { globalStyles } from "./theme";
import React, { FC, useEffect } from "react";
import { yellow } from "@mui/material/colors";

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const theme = React.useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 520,
            md: 900,
            lg: 1200,
            xl: 1535,
          },
        },
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
                  main: "#102030",
                },
                secondary: {
                  main: yellow[500],
                },
                // text: {
                //   primary: grey[900],
                //   secondary: grey[800],
                // },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#102030",
                },
                secondary: {
                  main: yellow[500],
                },
                text: {
                  primary: "#fff",
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
