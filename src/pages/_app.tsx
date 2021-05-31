import "../styles/globals.css";
import type { AppProps } from "next/app";

import AnimationContext from "../components/AnimationContext";

import Layout from "./../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimationContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimationContext>
  );
}
export default MyApp;
