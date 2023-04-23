import "styled-components";
import { IButtonProps, IVearnTheme } from "interfaces";

declare module "styled-components" {
    export interface DefaultTheme extends IVearnTheme {}
    export interface ThemeProps extends IButtonProps {}
}
