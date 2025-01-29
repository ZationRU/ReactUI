import React, {ForwardedRef} from "react"
import {Center} from "@znui/layouts";
import {IconWrapper, IconWrapperProps} from "../IconWrapper/IconWrapper";

/**
 * Container for the icon. Wraps the icon in a 48x48 container and sets the icon size to 24x24 (default).
 * @param props
 * @constructor
 */
export const IconContainer = React.forwardRef((props: IconWrapperProps, ref: ForwardedRef<HTMLDivElement | SVGElement>) => {
        const {
            size,
            sizeTransition,
            sizeTransitionDuration,
            children,
            ...rest
        } = props

        return <Center
            ref={ref}
            layoutSize={48}
            {...rest}
        >
            <IconWrapper size={size} sizeTransition={sizeTransition} sizeTransitionDuration={sizeTransitionDuration}>
                {children}
            </IconWrapper>
        </Center>
    }
)

IconContainer.displayName = 'IconContainer'