/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React, { ReactElement, ReactNode, useState } from "react";
import type { AppProps } from "next/app";
import { NextPage } from "next";

import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */
import GlobalStyle from "styles/Global";
import ThemeProvider from "styles/ThemeProvider";
import { StringNReactElement } from "interfaces";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement, pageProps: Record<string, StringNReactElement>) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
    pageProps: Record<string, StringNReactElement>;
};

const Noop = ({ children }) => children;

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    // @ts-expect-error
    const Layout = Component.Layout || Noop;

    return (
        <ThemeProvider>
            <GlobalStyle height={undefined} $variant={""} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
