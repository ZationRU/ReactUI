import React from "react";

export interface LayoutPaddingProps {
    /**
     * Padding
     * @default 0
     */
    p?: string|number

    /**
     * Padding top
     * @default pv
     */
    pt?: string|number

    /**
     * Padding bottom
     * @default pv
     */
    pb?: string|number

    /**
     * Padding left
     * @default ph
     */
    pl?: string|number

    /**
     * Padding right
     * @default ph
     */
    pr?: string|number

    /**
     * Padding end
     * @default undefined
     */
    pe?: string|number

    /**
     * Padding start
     * @default undefined
     */
    ps?: string|number

    /**
     * Padding horizontal (ph = padding left = padding right)
     * @default undefined
     */
    ph?: string|number

    /**
     * Padding vertical (pc = padding top = padding bottom)
     * @default undefined
     */
    pv?: string|number
}