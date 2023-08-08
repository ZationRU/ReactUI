import React from "react";
import {znui} from "../znui";
import {HTMLZnUIProps} from "../../../styled/styled.types";

export interface AbsoluteCenterProps extends HTMLZnUIProps<'div'> {
    /**
     * Axis of center position
     */
    axis?: "horizontal" | "vertical" | "both"
}

/**
 * Basic component centering component in abstract position
 *
 * @param props
 * @constructor
 */
export const AbsoluteCenter = znui("div", {
    baseStyle: {
        pos: "absolute"
    },
    styles: ({ axis }: AbsoluteCenterProps) => ({
        left: axis!=="vertical" ? "50%" : undefined,
        top: axis!=="horizontal" ? "50%" : undefined,
        transform: ({
            horizontal: "translateX(-50%)",
            vertical: "translateY(-50%)",
            both: "translate(-50%, -50%)",
        }[axis||'both'])
    })
})
