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
				<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11283313544" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11283313544');
              `,
                    }}
                />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
      gtag('event', 'conversion', {'send_to': 'AW-11283313544/VRHJCJ6MtfwYEIjnpoQq'});
    `,
                    }}
                />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
