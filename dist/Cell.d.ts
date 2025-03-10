import React, { ReactNode } from 'react';
interface Props {
    render?: (x: number, y: number, ratio: number) => ReactNode;
    posX: number;
    posY: number;
    style?: (x: number, y: number, ratio: number) => {};
    ratio: number;
    value: number;
    height?: string;
    square?: boolean;
    onClick?: (x: number, y: number) => void;
    extraProps?: (x: number, y: number, value: number) => React.HTMLAttributes<HTMLDivElement>;
}
declare const _default: React.MemoExoticComponent<({ render, style, ratio, posX, posY, square, height, value, onClick, extraProps }: Props) => React.JSX.Element>;
export default _default;
