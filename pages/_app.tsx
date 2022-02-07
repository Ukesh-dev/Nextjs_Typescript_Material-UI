import * as React from "react";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import createEmotionCache from "../utils/createEmotionCache";
// import lightThemeOptions from '../styles/theme/lightThemeOptions';
import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextPage } from "next";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

// const lightTheme = createTheme(lightThemeOptions);

const theme = createTheme();

type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLaoyout = MyAppProps & {
  Component: NextpageWithLayout;
};
// const MyApp: React.FunctionComponent<AppPropsWithLaoyout> = (props) => {
function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLaoyout) {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement?.removeChild(jssStyles);
  //   }
  // }, []);
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    // (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Layout> */}

        {getLayout(<Component {...pageProps} />)}
        {/* </Layout> */}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
