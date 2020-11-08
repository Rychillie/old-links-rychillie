import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        transition: all 300ms ease-in-out;
    }

    html, body {
        min-width: 345px;
        width: 100%;
    }

    body {
        background: #111;
        color: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, button {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button, a {
        cursor: pointer;
    }

    html, body, #___gatsby, #gatsby-focus-wrapper {
        display: block;
        position: static;
        padding: 0;
        width: 100%;
        height: 100%;
    }
`
