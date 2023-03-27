import React from "react";
import {LayoutMarginProps} from "./LayoutMarginProps";
import {LayoutColorsProps} from "./LayoutColorsProps";
import {buildSizeProps, LayoutSizeProps} from "./LayoutSizeProps";
import {LayoutPaddingProps} from "./LayoutPaddingProps";

export type LayoutProps =
    LayoutPaddingProps &
    LayoutMarginProps &
    LayoutColorsProps &
    LayoutSizeProps &
    React.HTMLAttributes<HTMLDivElement>

export function Layout(props: LayoutProps) {
    const {
        /*
         * Colors
         */
        style,
        bg,
        color,
        opacity,

        /*
         * Margins
         */
        m,
        ml, mr,
        mb, mt,
        ms, me,
        mv, mh,

        /*
         * Paddings
         */
        p,
        pl, pr,
        pb, pt,
        ps, pe,
        pv, ph,

        /*
         * Sizes
         */
        w, width, h, height,
        maxW, maxWidth, minW, minWidth,
        maxH, maxHeight, minH, minHeight,

        ...otherProps
    } = props

    return <div {...otherProps} style={{
        ...style,

        /*
         * Paddings
         */
        paddingLeft: pl ?? ph ?? p,
        paddingRight: pr ?? ph ?? p,
        paddingTop: pt ?? pv ?? p,
        paddingBottom: pb ?? pv ?? p,
        paddingInlineStart: ps,
        paddingInlineEnd: pe,


        /*
         * Colors
         */
        background: bg,
        color: color,
        opacity: opacity,


        /*
         * Margins
         */
        marginLeft: ml ?? mh ?? m,
        marginRight: mr ?? mh ?? m,
        marginTop: mt ?? mv ?? m,
        marginBottom: mb ?? mv ?? m,
        marginInlineStart: ms,
        marginInlineEnd: me,

        /*
         * Sizes
         */
        height: h ?? height,
        width: w ?? height,
        maxHeight: maxH ?? maxHeight,
        maxWidth: maxW ?? maxWidth,
        minHeight: minH ?? minHeight,
        minWidth: minW ?? minWidth,
    }}/>
}