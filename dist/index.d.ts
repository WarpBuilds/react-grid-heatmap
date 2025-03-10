import * as React from 'react';
export interface HeatMapGridProps {
    data: number[][];
    xLabels?: string[];
    yLabels?: string[];
    cellHeight?: string;
    square?: boolean;
    xLabelsPos?: 'top' | 'bottom';
    yLabelsPos?: 'left' | 'right';
    xLabelsStyle?: (index: number) => {};
    yLabelsStyle?: (index: number) => {};
    cellStyle?: (x: number, y: number, ratio: number) => {};
    cellRender?: (x: number, y: number, value: number) => {};
    cellExtraProps?: (x: number, y: number, value: number) => React.HTMLAttributes<HTMLDivElement>;
    onClick?: (x: number, y: number) => void;
}
export declare const HeatMapGrid: ({ data, xLabels, yLabels, xLabelsPos, yLabelsPos, square, cellHeight, xLabelsStyle, yLabelsStyle, cellStyle, cellRender, cellExtraProps, onClick }: HeatMapGridProps) => React.JSX.Element;
