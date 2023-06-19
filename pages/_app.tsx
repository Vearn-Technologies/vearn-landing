import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../assets/fonts/stylesheet.css";
import { theme } from "../chakra-theme";
import LayoutWidget, { LayoutEnums } from "../widgets/layout";
import Head from "next/head";

interface ComponentExtras {
	title: string;
}

function MyApp({ Component, pageProps }: AppProps & { Component: ComponentExtras }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>{"Vearn | " + Component.title}</title>
			</Head>
			<LayoutWidget layout={LayoutEnums[pageProps.layout as keyof typeof LayoutEnums]}>
				<Component {...pageProps} />
			</LayoutWidget>
		</ChakraProvider>
	);
}

export default MyApp;
