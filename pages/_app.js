import '../styles/globals.scss'
import '../styles/ress.css'
import '../styles/swiper.css'
import '../styles/breakpoints.css'
import '../styles/navbar.scss'
import '../styles/header.scss'
import '../styles/products.scss'
import '../styles/utils.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
