import "../styles/index.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import ThemeProvider from "../context/themeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
