import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        outline: 0;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
    }
`;
