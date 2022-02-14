import { ReactElement, ReactNode } from 'react';
import { EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPage } from 'next';
import { ThemeProvider as PreferredTheme } from 'next-themes';
import Layout from '../components/Layout';
import { AppProvider } from '../context';
import MUIThemeProvider from '../components/helpers/MuiThemeProvider';
// import PageProvider from '../components/helpers/PageProvider';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLaoyout = MyAppProps & {
  Component: NextpageWithLayout;
};
// const MyApp: React.FunctionComponent<AppPropsWithLaoyout> = (props) => {
function MyApp({ Component, pageProps }: AppPropsWithLaoyout) {
  // const { Component, emotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  // const getLayout = Component.getLayout ?? ((page) => page);
  return (
    // <PageProvider emotionCache={emotionCache}>
    <PreferredTheme>
      <MUIThemeProvider>
        <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
      </MUIThemeProvider>
    </PreferredTheme>
    // </PageProvider>
  );
}

export default MyApp;
