import React, {CSSProperties} from "react"
import {Layout, LayoutProps} from "../../Basic";
import classNames from "classnames";
import "./IconWrapper.css";
import {Adaptive, useAdaptiveValue} from "../../../adaptive";
import {Console} from "inspector";

export interface IconWrapperProps extends LayoutProps {
    size?: Adaptive<number>
}

/**
 * Tool for manipulate icon size. Supports svg icons and font icons.
 * Works in all components with icons.
 * @param props
 * @constructor
 */
export const IconWrapper = (props: IconWrapperProps) => {
    const {
        className,
        size,
        ...otherProps
    } = props

    return <Layout
        className={classNames("IconWrapper", className)}
        style={{
            '--icon-size': (useAdaptiveValue(size) || 24) + "px"
        } as CSSProperties}
        {...otherProps}
    />
}