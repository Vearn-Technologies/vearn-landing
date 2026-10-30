import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const font = `'Fivo Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`;

// Dark is the default; in light mode the page is a faint grey so white surfaces read as cards. Every colour the UI paints comes from a semantic token below, so the
// toggle only has to flip Chakra's colour mode. Dark values are the colours the site always had.
const semanticTokens = {
  // Light mode has little fill contrast between surfaces, so cards get a hairline ring and soft shadow.
  shadows: {
      card: { default: "0 0 0 1px #DCE3E9, 0 1px 3px rgba(15, 20, 25, 0.06)", _dark: "none" },
  },
  colors: {
    bg: {
      page: { default: "#F3F5F8", _dark: "#15191E" },
      subtle: { default: "#EBEFF3", _dark: "rgba(0, 0, 0, 0.2)" },
      surface: { default: "#FFFFFF", _dark: "#171B21" },
      raised: { default: "#EEF2F6", _dark: "#20262E" },
      hover: { default: "#E9EEF3", _dark: "rgba(255, 255, 255, 0.06)" },
      band: { default: "#E9EEF3", _dark: "#000000" },
      overlay: {
        default: "rgba(15, 20, 25, 0.4)",
        _dark: "rgba(0, 0, 0, 0.6)",
      },
    },
    border: {
      default: { default: "#C9D3DC", _dark: "rgba(255, 255, 255, 0.11)" },
      subtle: { default: "#DCE3E9", _dark: "rgba(255, 255, 255, 0.08)" },
      strong: { default: "#9AA9B6", _dark: "rgba(255, 255, 255, 0.2)" },
    },
    text: {
      primary: { default: "#0F1419", _dark: "#FFFFFF" },
      muted: { default: "#536471", _dark: "#D3D3D3" },
      faint: { default: "#5F6B76", _dark: "#8A94A3" },
    },
    brand: {
      100: { default: "#EEF2F6", _dark: "rgba(24, 31, 40, 0.93)" },
      solid: { default: "#073F8D", _dark: "#073F8D" },
      outline: { default: "#073F8D", _dark: "#3C78D8" },
      text: { default: "#073F8D", _dark: "#A8C8FF" },
      soft: { default: "#E8F0FB", _dark: "rgba(7, 63, 141, 0.35)" },
    },
    logo: { default: "#073F8D", _dark: "#FFFFFF" },
    green: { 800: { default: "#047A42", _dark: "#04A457" } },
    yellow: { 800: { default: "#8A6100", _dark: "#FFBE55" } },
    red: { 800: { default: "#C23B3B", _dark: "#E25C5C" } },
    status: {
      success: { default: "#047A42", _dark: "#4ADE80" },
      warning: { default: "#8A6100", _dark: "#FFBE55" },
      danger: { default: "#C23B3B", _dark: "#F87171" },
    },
  },
};

export const theme = extendTheme(
  {
    config: { initialColorMode: "dark", useSystemColorMode: false },

    semanticTokens,

    colors: {
      brand: {
        50: "#E8F0FB",
        200: "#7CA6E0",
        300: "#3C78D8",
        400: "#1A5BB8",
        500: "#073F8D",
        600: "#0A4FB0",
        700: "#06336F",
      },
      white: { 500: "#ffffff" },
      green: { 100: "rgba(4, 164, 87, 0.15);" },
      yellow: { 100: "rgba(255, 190, 85, 0.15);" },
      red: { 100: "#E25C5C26" },
    },

    fonts: {
      body: font,
      heading: font,
      button: font,
    },

    styles: {
      global: () => ({
        "html, body": { bg: "bg.page", color: "text.primary" },
      }),
    },

    components: {
      Button: {
        variants: {
          // Chakra lightens solid buttons in dark mode; Vearn keeps the same filled blue in both.
          solid: ({ colorScheme: c }) =>
            c === "transparent" || c === "none" || c === "white"
              ? { color: "text.primary", _hover: { bg: "bg.hover" } }
              : c === "gray"
              ? {}
              : {
                  bg: `${c}.500`,
                  color: "white",
                  _hover: { bg: `${c}.600`, _disabled: { bg: `${c}.500` } },
                  _active: { bg: `${c}.700` },
                },
          outline: ({ colorScheme: c }) =>
            c === "brand"
              ? {
                  borderColor: "brand.outline",
                  color: "brand.text",
                  _hover: { bg: "brand.soft" },
                  _active: { bg: "brand.soft" },
                }
              : {},
          ghost: ({ colorScheme: c }) =>
            c === "brand"
              ? {
                  color: "text.primary",
                  _hover: { bg: "bg.hover" },
                  _active: { bg: "bg.hover" },
                }
              : {},
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              bg: "bg.surface",
              borderColor: "border.default",
              _hover: { borderColor: "border.strong" },
              _placeholder: { color: "text.faint" },
            },
          },
        },
      },
      Modal: {
        baseStyle: {
          overlay: { bg: "bg.overlay" },
          dialog: { bg: "bg.surface", color: "text.primary" },
        },
      },
      Drawer: {
        baseStyle: {
          overlay: { bg: "bg.overlay" },
          dialog: { bg: "bg.surface", color: "text.primary" },
        },
      },
      Menu: {
        baseStyle: {
          list: {
            bg: "bg.surface",
            borderColor: "border.default",
            color: "text.primary",
          },
          item: {
            bg: "transparent",
            _hover: { bg: "bg.hover" },
            _focus: { bg: "bg.hover" },
          },
        },
      },
      Popover: {
        baseStyle: {
          content: {
            bg: "bg.surface",
            borderColor: "border.default",
            color: "text.primary",
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" }),
);
