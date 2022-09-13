import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const isProd = process.env.NODE_ENV === "production";
  const isStatic = process.env.NEXT_PUBLIC_BUILD_MODE === "static";
  const basePath = isProd && isStatic ? "/hungtse-next" : "";

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1GQR0N41BT"
          strategy="afterInteractive"
        ></Script>
        <Script
          src={basePath + "/js/gtag.js"}
          strategy="afterInteractive"
        ></Script>
      </body>
    </Html>
  );
}
