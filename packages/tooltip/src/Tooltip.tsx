import React, {ForwardedRef, ReactNode, useState} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {Layout, LayoutProps} from "@znui/layouts";
import {Body} from "@znui/typography";
import {mergeRefs} from "@znui/utils";

export interface TooltipProps extends LayoutProps {
    text: ReactNode;
}

export const Tooltip = React.forwardRef(
    (props: TooltipProps, forwardRef: ForwardedRef<HTMLDivElement>) => {
        const {
            text,
            onPointerEnter,
            onPointerLeave,
            onTouchEnd,
            ...rest
        } = props

        const [showed, setShowed] = useState(false)
        const ref = React.useRef<HTMLDivElement>(null)

        let interval = 0
        const onEnter = () => {
            interval && clearInterval(interval);
            interval = setTimeout(function() {
                setShowed(true);
            }, 1e3) as unknown as number;
        }

        const onLeave = () => {
            interval && clearInterval(interval);
            interval = setTimeout(function() {
                setShowed(false);
            }, 500) as unknown as number;
        }

        const bounding = ref.current && ref.current.getBoundingClientRect();
        const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        const top = bounding ? bounding.bottom : 0;
        const left = bounding ? bounding.right + 220 > windowWidth ? bounding.left - 200 : bounding.right : 0;

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

            <Layout
                to={{
                    oc: showed ? 1: 0
                }}
                top={top}
                left={left}
                maxW={200}
                bg={ThemeTokens.inverseSurface}
                c={ThemeTokens.inverseOnSurface}
                ph={8}
                pv={4}
                pos='fixed'
                shapeScale='esm'
                zIndex={1}
            >
                <Body size='small'>{text}</Body>
            </Layout>
        </>
    }
)

Tooltip.displayName = 'Tooltip'