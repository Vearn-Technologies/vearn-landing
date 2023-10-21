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
				<title>{Component.title}</title>
				<meta name="description" content="Earn rewards effortlessly by engaging with and completing simple tasks on your favorite social media platforms,
							right from the comfort of your home.
							Turn your online activities into profits and enjoy the perks of a side hustle without the hustle!"/>
    <meta name="keywords" content="engage, earn, social, tasks,  TV shows, rewards, events, promotions, bbnaija, big brother naija, big brother, nigerian idol"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</Head>
			<LayoutWidget layout={LayoutEnums[pageProps.layout as keyof typeof LayoutEnums]}>
				<Component {...pageProps} />
			</LayoutWidget>
		</ChakraProvider>
	);
}

export default MyApp;
