import React, {ForwardedRef, ReactNode, useMemo, useState} from "react";
import {Layout, LayoutProps, VStack} from "@znui/layouts";
import {mergeRefs} from "@znui/utils";
import {Portal} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {usePopoverContext} from "../Popover/Popover";
import Measure, {BoundingRect} from "react-measure";

export interface PopoverContentProps extends LayoutProps {
    /**
     * The content of the popover.
     */
    children: ReactNode
    /**
     * The vertical placement of the popover. If not specified, it will be automatically determined.
     */
    placement?: 'top' | 'bottom'
}

export const PopoverContent = React.forwardRef((props: PopoverContentProps, forwardRef: ForwardedRef<HTMLDivElement>) => {
    const {
        children,
        placement,
        ...rest
    } = props

    const {isOpened, point, close} = usePopoverContext()
    const [size, setSize] = useState<Partial<BoundingRect>>()

    const { top, left } = useMemo(() => {
        if(point == null || size == null || size.height == null || size.width == null)
            return {left: 0, top: 0}

        let top = (point.bottom ?? 0) + 8
        let left = point.left ?? 0
        left -= (size.width / 2) - point.width / 2

        if((top + size.height >= window.innerHeight && placement == null) || placement == 'top') {
            top = (point.top ?? 0) - 8 - size.height
        }

        // If the element goes beyond the left edge of the screen
        if(left <= 0) {
            left = Math.abs(left) + 8
        }
        // If the element goes beyond the right edge of the screen
        if(left >= window.innerWidth) {
            left = point.left - 8
        }

        return { top, left }
    }, [placement, point, size])

    return point ?
        <Portal>
            <>
                <Layout
                    pos="fixed"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={1700}
                    height='100vh'
                    overflow="visible"
                    onClick={close}
                />

                <Measure bounds onResize={e => {
                    if(size?.width != e.bounds?.width || size?.height != e.bounds?.height)
                        setSize(e.bounds!!)
                }}>
                    {({measureRef}) =>
                        <VStack
                            to={{
                                oc: isOpened ? 1 : 0
                            }}
                            top={top}
                            left={left}
                            bg={ThemeTokens.surfaceContainerHighest}
                            c={ThemeTokens.onSurfaceVariant}
                            pos='fixed'
                            shapeScale={'md'}
                            p={12}
                            zIndex={1800}
                            ref={mergeRefs(measureRef, forwardRef)}
                            {...rest}
                        >
                            {children}
                        </VStack>
                    }
                </Measure>
            </>
        </Portal>
    : null
})