"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: var(--font-satoshi), sans-serif;
    }
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    button {
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-integralFc), sans-serif;
    }
`;

export default GlobalStyles;
