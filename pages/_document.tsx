import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
		<Html lang="en" translate="no">
			<Head>
				<script
					src="https://unpkg.com/@fincra-engineering/checkout@2.2.0/dist/inline.min.js"
					async
				/>
				<script src="https://checkout.flutterwave.com/v3.js" async />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
