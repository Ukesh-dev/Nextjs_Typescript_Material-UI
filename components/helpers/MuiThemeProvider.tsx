import { useTheme } from 'next-themes';
import {
  responsiveFontSizes,
  CssBaseline,
  createTheme,
  ThemeProvider,
  GlobalStyles,
} from '@mui/material';
import React, { FC, useEffect } from 'react';
import { grey, yellow } from '@mui/material/colors';
import { globalStyles } from './theme';

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  let theme = React.useMemo(
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
            fontSize: '2rem',
          },
        },
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                  main: '#102030',
                },
                secondary: {
                  main: yellow[500],
                },
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: '#102030',
                },
                secondary: {
                  main: yellow[500],
                },
              }),
        },
      }),
    [mode]
  );

  // theme.typography.h3 = {
  //   fotnSize: "1.2rem",
  //   [theme.breakpoints.up('md')]:{
  //     fontSize: "3rem",
  //   }
  // }
  theme = responsiveFontSizes(theme);

  useEffect(() => {
    // resolvedTheme === "light" ? setMode(  "light") : setMode("dark"); //! Eslint gives error
    if (resolvedTheme === 'light') {
      setMode('light');
    } else {
      setMode('dark');
    }
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
