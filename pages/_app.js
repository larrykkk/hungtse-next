import '../styles/globals.scss'
import '../styles/ress.css'
import '../styles/swiper.css'
import '../styles/breakpoints.css'
import '../styles/navbar.scss'
import '../styles/header.scss'


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
