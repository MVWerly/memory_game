import { createGlobalStyle } from 'styled-components'

export const colors = {
  lightMossGreen: '#ABD6AC',
  shadowBlue: '#778F9F',
  white: '#fff',
  deepDarkBlue: '#101c2c'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
  }

  body {
    background-color: ${colors.lightMossGreen};
  }

  .container {
    max-width: 700px;
    margin: 0 auto;
  }
`
