import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'

const baseFont =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'

const DEFAULT_FONT_SIZE = 10
const MOBILE_DESIGN_WIDTH = 375
const MOBILE_MIN_WIDTH = 320

const GlobalStyle = createGlobalStyle`

/* reset style */
${reset}

/* font style - 10px: 1rem */
html {
    font: normal 10px ${baseFont}; 
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media only screen and (max-width: 375px) {
      font-size: ${(DEFAULT_FONT_SIZE / MOBILE_DESIGN_WIDTH) * 100}vw;
    }
    @media only screen and (max-width: 320px) {
      font-size: ${DEFAULT_FONT_SIZE * (MOBILE_MIN_WIDTH / MOBILE_DESIGN_WIDTH)}px;
    }

  }

  /* default text style */
  body {
    font-family: 'Roboto', ${baseFont}
    line-height: 1.4;
  }
`

export default GlobalStyle
