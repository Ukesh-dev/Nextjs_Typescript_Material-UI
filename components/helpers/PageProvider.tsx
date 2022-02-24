// import * as React from "react";
// import { useTheme } from "next-themes";
import { ThemeProvider as PreferredTheme } from 'next-themes';
import { CacheProvider, EmotionCache } from '@emotion/react';
// import {
//   ThemeProvider,
//   CssBaseline,
//   createTheme,
//   GlobalStyles,
// } from "@mui/material";
// import { getDesignTokens, theme } from "../theme";

import createEmotionCache from '../../utils/createEmotionCache';
// import lightThemeOptions from '../styles/theme/lightThemeOptions';
import MUIThemeProvider from './MuiThemeProvider';

interface PageProviderProps {
  emotionCache?: EmotionCache;
  children: React.ReactNode;
}

const clientSideEmotionCache = createEmotionCache();

// const lightTheme = createTheme(lightThemeOptions);

// const theme = createTheme();

// const MyApp: React.FunctionComponent<AppPropsWithLaoyout> = (props) => {
function PageProvider(props: PageProviderProps) {
  const { children, emotionCache = clientSideEmotionCache } = props;
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement?.removeChild(jssStyles);
  //   }
  // }, []);
  // const defaultGetLayout: (page:ReactNode) => ReactNode = (page:ReactNode) => page;
  //   const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  // const muiTheme = createTheme(getDesignTokens("dark"));
  // console.log(theme);
  return (
    // (
    <PreferredTheme>
      <CacheProvider value={emotionCache}>
        {/* <ThemeProvider theme={muiTheme}> */}
        <MUIThemeProvider>{children}</MUIThemeProvider>
        {/* </Layout> */}
        {/* </ThemeProvider> */}
      </CacheProvider>
    </PreferredTheme>
  );
}

export default PageProvider;
