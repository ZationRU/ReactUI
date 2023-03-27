import React from "react";

export interface LayoutMarginProps {
    /**
     * Margin
     * @default 0
     */
    m?: string|number

    /**
     * Margin top
     * @default mv
     */
    mt?: string|number

    /**
     * Margin bottom
     * @default mv
     */
    mb?: string|number

    /**
     * Margin left
     * @default mh
     */
    ml?: string|number

    /**
     * Margin right
     * @default mh
     */
    mr?: string|number

    /**
     * Margin end
     * @default undefined
     */
    me?: string|number

    /**
     * Margin start
     * @default undefined
     */
    ms?: string|number

    /**
     * Margin horizontal (mh = margin left = margin right)
     * @default undefined
     */
    mh?: string|number

    /**
     * Margin vertical (mc = margin top = margin bottom)
     * @default undefined
     */
    mv?: string|number
}