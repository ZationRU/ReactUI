import React from "react";
import {LayoutProps} from "./Layout";

export interface LayoutColorsProps {
    /**
     * Background
     * @default transparent
     */
    bg?: string

    /**
     * Text color
     * @default transparent
     */
    color?: string

    /**
     * Opacity
     * @default 1
     */
    opacity?: number
}