import '../styles/globals.scss'
import '../styles/ress.css'
import '../styles/swiper.css'
import '../styles/breakpoints.css'
import '../styles/navbar.scss'
import '../styles/header.scss'
import '../styles/products.scss'
import '../styles/utils.scss'
import '../styles/factory.scss'
import '../styles/popover.scss'

// // import styles
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// // If you want you can use SCSS instead of css
// import "lightgallery/scss/lightgallery.scss";
// import "lightgallery/scss/lg-zoom.scss";

import 'photoswipe/style.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Layout from '../components/layout'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
