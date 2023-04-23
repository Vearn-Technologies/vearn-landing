import IGlobalPalette from "./IGlobalPalette";

export type Color = string;

interface IVearnTheme {
    textPrimary: Color;
    textSecondary: Color;
    textTertiary: Color;
    grids: {
        sm: number;
        md: number;
        lg: number;
    };
    breakpoints: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
        xxxl: number;
    };
    colors: IGlobalPalette;
}

export default IVearnTheme;
