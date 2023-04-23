import { createGlobalStyle, css } from "styled-components";
import fonts from "./font";

const GlobalStyle = createGlobalStyle`${css`
    :root {
        --color-black: #000000;
        --color-white: #ffffff;
        --color-red: #f9002b;
        --color-grey: #484b45;
        /* --header-height: 112px;
        --sidebar-width: 164px; */
        --toastify-color-success: ${({ theme }) => theme.colors.toastifyBgSuccess};
        --toastify-color-error: ${({ theme }) => theme.colors.fireOpal};
        --toastify-color-warning: ${({ theme }) => theme.colors.toastifyBgWarn};
    }

    ${fonts}

    body {
        font-family: "Fivo Sans", Helvetica, Arial, Lucida, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.eerieBlack};
        height: 100%;
        overflow-x: hidden;
        /* @media screen and (max-width: 1200px) {
            opacity: 0;
        } */
    }

    html {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: light;
        }
    }

    .page-transition-enter {
        opacity: 0;
    }

    .page-transition-enter-active {
        opacity: 1;
        transition: opacity 300ms linear;
    }

    .page-transition-exit {
        opacity: 1;
    }

    .page-transition-exit-active {
        opacity: 0;
        transition: opacity 300ms linear;
    }

    .Toastify {
        &__toast {
            padding: 0;

            &--info {
            }

            &--success {
                background-color: var(--toastify-color-success);
                border: 1px solid var(--toastify-color-success);
                box-shadow: 0px 2px 26px rgba(82, 215, 0, 0.1);
                border-radius: 6px;
            }

            &--warning {
                background-color: var(--toastify-color-warning);
                border: 1px solid var(--toastify-color-warning);
                box-shadow: 0px 2px 26px rgba(215, 0, 0, 0.1);
                border-radius: 6px;
            }

            &--error {
                background-color: var(--toastify-color-error);
                border: 1px solid var(--toastify-color-error);
                box-shadow: 0px 2px 26px rgba(215, 0, 0, 0.1);
                border-radius: 6px;
            }
        }

        &__close-button {
            opacity: 1 !important;
            margin-top: 4px;
            margin-right: 8px;

            > svg {
                fill: ${({ theme }) => theme.colors.white};
            }
        }
    }
    input:focus-visible {
        outline: 0px !important;
        box-shadow: none !important;
        border: none !important;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
    input[data-autocompleted] {
        background-color: transparent !important;
    }
`}`;

export default GlobalStyle;
