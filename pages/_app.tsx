import React, { FC } from "react";
import { AppProps } from "next/app";
import { Header } from "../components";
import { wrapper } from "../store/store";

import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
