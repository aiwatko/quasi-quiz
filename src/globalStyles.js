import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html { 
        height: 100%; 
    }
    body {
        min-height: 100%;
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`;
