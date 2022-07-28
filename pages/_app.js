import "../styles/globals.scss";
import "../styles/ress.css";
import "../styles/swiper.css";
import "../styles/breakpoints.css";
import "../styles/navbar.scss";
import "../styles/header.scss";
import "../styles/products.scss";
import "../styles/utils.scss";
import "../styles/factory.scss";
import "../styles/popover.scss";

import "photoswipe/style.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/hungtse-next" : "";

  return (
    <Layout>
      <Head>
        <link rel="icon" href={basePath + "/favicon.ico"} />
        <meta
          property="og:image"
          content={`https://larrykkk.github.io/hungtse-next/image/竑澤單Logo-27.png`}
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
