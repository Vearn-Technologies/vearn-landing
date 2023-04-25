/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { forwardRef } from "react";

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import { Loader } from "components/Icons";

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
    value?: string | number | readonly string[] | undefined;
    id?: string;
    href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            label,
            className,
            onClick,
            disabled,
            isLoading,
            children,
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
                <a
                    {...rest}
                    className={`btn ${className}`}
                    href={href}
                    aria-label={`Open ${label}`}
                    target={href.startsWith("http") ? "_blank" : "_self"}
                    rel={href.startsWith("http") ? "noopener noreferrer" : ""}
                >
                    {IconBefore !== null && <span className="mr-2">{IconBefore}</span>}

                    {isLoading === true ? <Loader /> : label}
                    {children}

                    {IconAfter !== null && <span className="ml-2">{IconAfter}</span>}
                </a>
            );
        }
        return (
            <button
                type="button"
                className={`btn ${className}`}
                ref={ref}
                onClick={onClick}
                disabled={(disabled ?? false) || isLoading}
                value={value}
                id={id}
            >
                {IconBefore !== null && <span className="mr-2">{IconBefore}</span>}

                {isLoading === true ? <Loader /> : label}
                {children}

                {IconAfter !== null && <span className="ml-2">{IconAfter}</span>}
            </button>
        );
    },
);

Button.defaultProps = {
    IconBefore: null,
    IconAfter: null,
    disabled: false,
    isLoading: false,
    children: null,
    onClick: () => {},
    value: undefined,
    id: undefined,
    href: undefined,
    label: undefined,
    type: "button",
    className: "",
};

export default Button;
