import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import AnimationContext from "../components/AnimationContext";

import Layout from "./../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimationContext>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimationContext>
  );
}
export default MyApp;
