/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */
import styled, { css, DefaultTheme } from "styled-components";

/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import { IButtonProps, IHandleButtonType } from "interfaces";

const handleButtonType = (theme: DefaultTheme, type: string): IHandleButtonType => {
    switch (type) {
        case "transparent": {
            const style = {
                backgroundColor: "transparent",
                backgroundColorHovered: "var(--c-fb-blue)",
                color: "var(--c-white)",
                colorHovered: "var(--c-white)",
                border: "none",
            };
            return style;
        }
        case "outlined": {
            const style = {
                backgroundColor: "transparent",
                backgroundColorHovered: theme.colors.white,
                color: theme.colors.white,
                colorHovered: theme.colors.persianGreen,
                border: `1px solid ${theme.colors.white}`,
            };
            return style;
        }

        case "primary":
        default:
            // eslint-disable-next-line no-case-declarations
            const style = {
                backgroundColor: theme.colors.midnightBlue,
                backgroundColorHovered: "",
                color: theme.colors.white,
                colorHovered: "",
                border: "none",
            };
            return style;
    }
};

const btnStyles = css`
    border-radius: 8px;
    background-color: ${({ theme, $variant }) => handleButtonType(theme, $variant).backgroundColor};
    color: ${({ theme, $variant }) => handleButtonType(theme, $variant).color};
    border: ${({ theme, $variant }) => handleButtonType(theme, $variant).border};
    box-shadow: ${({ theme, $variant }) => handleButtonType(theme, $variant).boxShadow};
    height: ${({ height }) => height};
    padding: 0 12px;
    font-family: "Fivo Sans";
    font-size: 1rem;
    line-height: 19px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    &:active,
    &:focus,
    &:hover {
        background-color: ${({ theme, $variant }) => handleButtonType(theme, $variant).backgroundColorHovered};
        color: ${({ theme, $variant }) => handleButtonType(theme, $variant).colorHovered};
    }
    /* @media screen and (max-width: 1024px) {
        height: 45px;
        font-size: 0.8rem;
    } */
`;

const StyledButton = styled.button<IButtonProps>`
    && {
        ${btnStyles}
    }
`;
const StyledLink = styled.a<IButtonProps>`
    && {
        ${btnStyles}
    }
`;

export { btnStyles, StyledLink };
export default StyledButton;
