import * as React from "react";
import { useTheme } from "next-themes";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider as PreferredTheme } from "next-themes";
import { CacheProvider, css, EmotionCache } from "@emotion/react";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  GlobalStyles,
} from "@mui/material";
import { getDesignTokens, theme } from "../theme";

import createEmotionCache from "../utils/createEmotionCache";
// import lightThemeOptions from '../styles/theme/lightThemeOptions';
import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { AppProvider, useGlobalContext } from "../context";
import MUIThemeProvider from "../components/helpers/MuiThemeProvider";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

// const lightTheme = createTheme(lightThemeOptions);

// const theme = createTheme();

type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLaoyout = MyAppProps & {
  Component: NextpageWithLayout;
};
// const MyApp: React.FunctionComponent<AppPropsWithLaoyout> = (props) => {
function MyApp(props: AppPropsWithLaoyout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement?.removeChild(jssStyles);
  //   }
  // }, []);
  // const defaultGetLayout: (page:ReactNode) => ReactNode = (page:ReactNode) => page;
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  // const muiTheme = createTheme(getDesignTokens("dark"));
  // console.log(theme);
  return (
    // (
    <PreferredTheme>
      <CacheProvider value={emotionCache}>
        {/* <ThemeProvider theme={muiTheme}> */}
        <MUIThemeProvider>
          <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
        </MUIThemeProvider>
        {/* </Layout> */}
        {/* </ThemeProvider> */}
      </CacheProvider>
    </PreferredTheme>
  );
}

export default MyApp;
