import React, {ForwardedRef, ReactElement, ReactNode, useEffect, useRef, useState} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {HStack, Layout, LayoutProps, VStack} from "@znui/layouts";
import {Body, Title} from "@znui/typography";
import {mergeRefs} from "@znui/utils";
import {Portal} from "@znui/md3-utils";

export interface TooltipProps extends LayoutProps {
    /**
     * The text of the tooltip.
     */
    text: ReactNode
    /**
     * The delay in milliseconds before the tooltip opens.
     * @default 1000
     */
    openDelay?: number
    /**
     * The delay in milliseconds before the tooltip closes.
     * @default 1000
     */
    closeDelay?: number
    /**
     * The vertical placement of the tooltip. If not specified, it will be automatically determined.
     */
    placementY?: 'top' | 'bottom'
    /**
     * The horizontal placement of the tooltip, only if the tooltip is a `Rich tooltip`. If not specified, it will be automatically determined.
     */
    placementX?: 'left' | 'right'
    /**
     * The header of the tooltip. If specified, the tooltip becomes a Rich tooltip.
     */
    subhead?: ReactNode
    /**
     * The actions at the bottom of the tooltip, only if the tooltip is a `Rich tooltip`.
     */
    action?: ReactElement
}

export const Tooltip = React.forwardRef(
    (props: TooltipProps, forwardRef: ForwardedRef<HTMLDivElement>) => {
        const {
            text,
            openDelay= 1000,
            closeDelay= 1000,
            subhead,
            action,
            placementY,
            placementX,
            onPointerEnter,
            onPointerLeave,
            onTouchEnd,
            ...rest
        } = props

        const [showed, setShowed] = useState(false)
        const [isOver, setIsOver] = useState(false)
        const ref = React.useRef<HTMLDivElement>(null)
        const tooltipRef = React.useRef<HTMLDivElement>(null)
        const interval = useRef<ReturnType<typeof setTimeout> | undefined>()

        const onEnter = () => {
            interval.current && clearTimeout(interval.current)
            interval.current = setTimeout(() => setShowed(true), openDelay)
        }

        const onLeave = () => {
            interval.current && clearTimeout(interval.current)
            interval.current = setTimeout(() => setShowed(false), closeDelay)
        }

        useEffect(() => {
            if(!isOver && isRich) setShowed(false)
            if(isOver && isRich) clearTimeout(interval.current)
        }, [isOver])

        const bounding = ref.current && ref.current.getBoundingClientRect()
        const tooltipBounding = tooltipRef.current && tooltipRef.current.getBoundingClientRect()
        const isRich = subhead != null

        function calculateTooltipPosition() {
            let top = 0
            let left = 0

            if (bounding && tooltipBounding) {
                // Default bottom
                top = bounding.bottom + 4

                // Adjust top based on placement or available space
                if (placementY === 'top' || (top + tooltipBounding.height > window.innerHeight && !placementY))
                    top = bounding.top - 4 - tooltipBounding.height

                // Adjust left based on isRich and available space
                if (!isRich) {
                    left = bounding.left - tooltipBounding.width / 2 + bounding.width / 2
                } else {
                    // Default right
                    left = bounding.left + bounding.width

                    // Adjust left based on placement or available space
                    if (placementX == 'left' || (left + tooltipBounding.width > window.innerWidth && !placementX))
                        left = bounding.left - tooltipBounding.width

                    if(left < 0) left = bounding.width / 2
                }

            }

            return { top, left };
        }

        const { top, left } = calculateTooltipPosition()

        return <>
            <Layout
                w='min-content'
                h='min-content'
                {...rest}
                ref={mergeRefs(ref, forwardRef)}
                onPointerEnter={e => {
                    onPointerEnter && onPointerEnter(e)
                    onEnter()
                }}
                onTouchEnd={e => {
                    onTouchEnd && onTouchEnd(e)
                    onLeave()
                }}
                onPointerLeave={e => {
                    onPointerLeave && onPointerLeave(e)
                    onLeave()
                }}
            />

            <Portal>
                <VStack
                    to={{
                        oc: showed ? 1 : 0
                    }}
                    top={top}
                    left={left}
                    maxW={isRich ? undefined : 200}
                    w={isRich ? 312 : undefined}
                    bg={isRich ? ThemeTokens.surfaceContainer : ThemeTokens.inverseSurface}
                    c={isRich ? ThemeTokens.onSurfaceVariant : ThemeTokens.inverseOnSurface}
                    spacing={isRich ? 4 : undefined}
                    pos='fixed'
                    shapeScale={isRich ? 'md' : 'esm'}
                    zIndex={2000}
                    ref={tooltipRef}
                    onMouseEnter={() => setIsOver(true)}
                    onMouseLeave={() => setIsOver(false)}
                >
                    <VStack ph={isRich ? 16 : 8} pt={isRich ? 12 : 4} pb={isRich ? 4 : 4}>
                        {isRich ? <>
                            <Title size='small'>{subhead}</Title>
                            <Body size='medium'>{text}</Body>
                        </> :
                            <Body size='small'>{text}</Body>
                        }
                    </VStack>

                    {/* Rich Tooltip Actions */}
                    {isRich && <HStack ph={8} spacing={8} mb={8}>
                        {action}
                    </HStack>}
                </VStack>
            </Portal>
        </>
    }
)

Tooltip.displayName = 'Tooltip'