import { useTheme } from "next-themes";
import { createTheme, GlobalStyles } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import { darkTheme, globalStyles, lightTheme } from "../../theme";
import { globalStyles } from "../../theme";
import React, { FC, useEffect, useState } from "react";
import { grey } from "@mui/material/colors";

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  //   const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          //   ...(mode === "light"
          //     ? {
          //         // palette values for light mode
          //         primary: {
          //           main: "#bada55",
          //         },
          //         // divider: amber[200],
          //         text: {
          //           primary: grey[900],
          //           secondary: grey[800],
          //         },
          //       }
          //     : {
          //         // palette values for dark mode
          //         primary: {
          //           main: "#bada55",
          //         },
          //         // divider: deepOrange[700],
          //         background: {
          //           default: "#000",
          //           // default: deepOrange[900],
          //           // paper: deepOrange[900],
          //         },
          //         text: {
          //           primary: "#000",
          //           secondary: grey[500],
          //         },
          //       }),
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
