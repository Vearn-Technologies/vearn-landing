import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const font = `'Fivo Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`;

export const theme = extendTheme(
  {
    colors: {
      brand: { 500: "#073F8D", 100: "rgba(24, 31, 40, 0.93);" },
      white: { 500: "#ffffff" },
      green: { 800: "#04A457", 100: "rgba(4, 164, 87, 0.15);" },
      yellow: { 800: "#FFBE55", 100: "rgba(255, 190, 85, 0.15);" },
      red: { 800: "#E25C5C", 100: "#E25C5C26" },
    },

    fonts: {
      body: font,
      heading: font,
      button: font,
    },

    styles: {
      global: () => ({
        body: { bg: "#15191E", color: "#fff" },
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);
