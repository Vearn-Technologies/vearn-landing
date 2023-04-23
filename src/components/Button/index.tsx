/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { forwardRef } from "react";

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import { Loader } from "components/Icons";
import StyledButton, { StyledLink } from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant: "primary" | "transparent" | "outlined";
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    IconBefore?: React.ReactNode;
    IconAfter?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    height?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    id?: string;
    href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            label,
            variant,
            type,
            className,
            onClick,
            disabled,
            isLoading,
            children,
            height,
            IconAfter,
            IconBefore,
            value,
            id,
            href,
            ...rest
        }: ButtonProps,
        ref,
    ) => {
        if (href !== undefined) {
            return (
                // @ts-expect-error
                <StyledLink
                    {...rest}
                    className={`btn ${className}`}
                    id={id}
                    href={href}
                    aria-label={`Open ${label}`}
                    target={href.startsWith("http") ? "_blank" : "_self"}
                    rel={href.startsWith("http") ? "noopener noreferrer" : ""}
                    $variant={variant}
                    height={height}
                >
                    {label}
                    {IconAfter !== null && <span className="ml-2">{IconAfter}</span>}
                </StyledLink>
            );
        }
        return (
            <StyledButton
                $variant={variant}
                type={type}
                className={`btn ${className}`}
                ref={ref}
                onClick={type !== "submit" ? onClick : undefined}
                disabled={(disabled ?? false) || isLoading}
                height={height}
                value={value}
                id={id}
            >
                {IconBefore !== null && <span className="mr-2">{IconBefore}</span>}

                {isLoading === true ? <Loader /> : label}
                {children}

                {IconAfter !== null && <span className="ml-2">{IconAfter}</span>}
            </StyledButton>
        );
    },
);

Button.defaultProps = {
    IconBefore: null,
    IconAfter: null,
    disabled: false,
    isLoading: false,
    children: null,
    height: "40px",
    onClick: () => {},
    value: undefined,
    id: undefined,
    href: undefined,
    label: undefined,
    type: "button",
    className: "",
};

export default Button;
