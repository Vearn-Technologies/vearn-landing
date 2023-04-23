import { IPalette, IVearnTheme } from "interfaces";
import colors from "./colors";

const colorsLight: IPalette = {
    textDark: colors.eerieBlack,
    textPrimary: colors.eerieBlack,
    textSecondary: colors.indigo,
    textTertiary: colors.indigo,

    white: colors.white,
    black: colors.black,
};

const colorsDark: IPalette = {
    textDark: colors.white,
    textPrimary: colors.white,
    textSecondary: colors.white,
    textTertiary: colors.white,

    white: colors.white,
    black: colors.black,
};

const vearnTheme = (lightMode: boolean): IVearnTheme => {
    return {
        colors,

        textPrimary: lightMode ? colorsLight.textPrimary : colorsDark.textPrimary,
        textSecondary: lightMode ? colorsLight.textSecondary : colorsDark.textSecondary,
        textTertiary: lightMode ? colorsLight.textTertiary : colorsDark.textTertiary,
        grids: {
            sm: 8,
            md: 12,
            lg: 24,
        },
        breakpoints: {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            xxxl: 1920,
        },
    };
};

const theme = {
    colorsLight,
    colorsDark,
};

export { vearnTheme };
export default theme;
