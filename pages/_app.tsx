import { ReactElement, ReactNode } from "react";
import { EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { AppProvider } from "../context";
import PageProvider from "../components/helpers/PageProvider";
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
function MyApp(props: AppPropsWithLaoyout) {
  const { Component, emotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <PageProvider emotionCache={emotionCache}>
      <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
    </PageProvider>
  );
}

export default MyApp;
