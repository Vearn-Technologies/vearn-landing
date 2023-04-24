/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React, { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { NextPage } from "next";

import "styles/global.css";
/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */

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
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
