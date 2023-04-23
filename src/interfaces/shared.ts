import { ReactElement, ReactNode } from "react";

interface StringNReactElement {
    type?: string;
    value?: string | ReactElement | ReactNode;
}

interface IPageTitle {
    title: StringNReactElement;
}

interface IButtonProps {
    $variant: string;
    height: string | undefined;
    href?: string;
    target?: string;
    rel?: string;
}

interface IHandleButtonType {
    backgroundColor: string;
    backgroundColorHovered?: string;
    color: string;
    colorHovered?: string;
    border: string;
    boxShadow?: string;
}

interface ModalProps {
    show: boolean | undefined;
    onHide?: () => void;
    // width: string;
    onClick?: () => void;
    data?: any;
    name?: string;
}

export type { StringNReactElement, IPageTitle, IButtonProps, IHandleButtonType, ModalProps };
