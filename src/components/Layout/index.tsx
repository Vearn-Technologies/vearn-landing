import React, { PropsWithChildren } from "react";
import Head from "next/head";

import SkipToMain from "components/A11y/skip-to-main";

interface ILayout extends PropsWithChildren {
    title: string;
}

const Layout = ({ children, title }: ILayout) => {
    return (
        <>
            <Head>
                <title>{`Vearn | ${title}`}</title>
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
                />
            </Head>
            <SkipToMain content="main-content" />
            <div className="w-full h-screen max-h-screen overflow-hidden relative bg-[#15191E]">{children}</div>
        </>
    );
};

export default Layout;
