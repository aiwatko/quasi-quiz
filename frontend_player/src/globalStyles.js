import { createGlobalStyle } from 'styled-components'
import { colors } from './materials/colors'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html { 
    height: 100%; 
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: ${colors.black};
  }

  #root {
    height: 100%;
  }
`
