import React from "react";

export interface LayoutSizeProps {
    /**
     * Width
     * @default 0
     */
    w?: string|number, width?: string|number;

    /**
     * Height
     * @default 0
     */
    h?: string|number, height?: string|number

    /**
     * Minimum width
     * @default 0
     */
    minW?: string|number, minWidth?: string|number

    /**
     * Minimum height
     * @default 0
     */
    minH?: string|number, minHeight?: string|number

    /**
     * Maximum width
     * @default 0
     */
    maxW?: string|number, maxWidth?: string|number

    /**
     * Maximum height
     * @default 0
     */
    maxH?: string|number, maxHeight?: string|number
}


export function buildSizeProps(props: LayoutSizeProps): React.CSSProperties {
    return {
        height: props.h ?? props.height,
        width: props.w ?? props.height,
        maxHeight: props.maxH ?? props.maxHeight,
        maxWidth: props.maxW ?? props.maxWidth,
        minHeight: props.minH ?? props.minHeight,
        minWidth: props.minW ?? props.minWidth,
    }
}