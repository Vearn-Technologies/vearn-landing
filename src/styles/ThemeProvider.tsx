import React, { useMemo } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import { vearnTheme } from "./theme";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // const darkMode = useIsDarkMode();
    const lightMode = true;

    const themeObject = useMemo(() => vearnTheme(lightMode), [lightMode]);

    return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>;
};

export default ThemeProvider;
