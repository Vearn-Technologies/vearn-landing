import * as React from "react";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/site.webmanifest" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>
            <body>
                <Main />
                {/* Here we will mount our modal portal */}
                <div id="modal-root" />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
