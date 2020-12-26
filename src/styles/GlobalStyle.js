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
        background-color: #111;
        color: #fff;
    }

    body {
        background-color: #111;
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
        min-width: -webkit-fill-available;
        min-height: -webkit-fill-available;
    }
    .errorPage {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: column;

        .row {
            display: flex;
            width: 100%;
            justify-content: center;
            flex-direction: column;
            padding: 100px 30px;

            @media screen and (min-width: 991px) {
                flex-direction: row;
            }

            h1 {
                max-width: 400px;
                width: 100%;
                margin-bottom: 60px;
                margin-right: 0px;

                @media screen and (min-width: 991px) {
                    margin-right: 30px;
                    margin-bottom: 0;
                }
            }

            img {
                max-width: 200px;
                max-height: 280px;
                width: 100%;
                height: auto;
            }
        }

        > a {
            display: flex;
            width: fit-content;
            padding: 10px 20px;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            background: #fff;
            color: #111;
            margin: 0 auto;
            font-weight: 700;
            text-decoration: none;
            border-radius: 8px;
            border: 2px solid #fff;

            &:hover {
                color: #fff;
                background: #111;
            }
        }
    }

    @media (min-width: 360px) {
        :root {
            --scale: 1;
        }
    }

    @media (min-width: 768px) {
        :root {
            --scale: 1.2;
        }
    }

    @media (min-width: 1024px) {
        :root {
            --scale: 1.4;
        }
    }

    p {
        font-size: calc(1rem * var(--scale));
    }
`
