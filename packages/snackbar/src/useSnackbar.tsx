import React, {MouseEvent, MouseEventHandler, ReactNode, ReactPortal, useEffect, useRef, useState} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {Adaptive, useAdaptiveValue} from "@znui/base";
import {Button, ButtonProps, IconButton} from "@znui/buttons";
import {HStack, Layout} from "@znui/layouts";
import {Body} from "@znui/typography";
import {createPortal} from "react-dom";

export type SnackbarConfig = {
    /**
     * Configuration options for the close button.
     */
    closeButton?: SnackbarCloseButton
    /**
     * The text content of the Snackbar.
     */
    text: ReactNode | string
    /**
     * Configuration options for the action button.
     */
    action?: SnackbarAction
    /**
     * Horizontal alignment of the Snackbar. Can be 'left' or 'right'.
     */
    horizontal?: 'left' | 'right'
    /**
     * Vertical offset of the Snackbar from the bottom of the screen. Can be a number or an adaptive value.
     */
    bottom?: Adaptive<number>
    /**
     * Duration the Snackbar is displayed. Can be 'long', 'short', or a number (milliseconds).
     */
    duration?: Adaptive<'long' | 'short' | number>
}

export type SnackbarAction = {
    /**
     * Title or text content of the action button.
     */
    title: ReactNode | string
    /**
     * Whether clicking the action button should automatically close the Snackbar.
     * @default true
     */
    close?: boolean
    /**
     * Event handler for clicks on the action button.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export type SnackbarCloseButton = {
    /**
     * Icon displayed in the close button.
     */
    icon: ReactNode
    /**
     * Whether clicking the close button should automatically close the Snackbar.
     * @default true
     */
    close?: boolean,
    /**
     * Event handler for clicks on the close button.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export type SnackbarHook = {
    /**
     * The Snackbar component, rendered as a ReactPortal.
     */
    snackbar?: ReactPortal

    /**
     * Shows the Snackbar with the given configuration.
     */
    showSnackbar: (data: SnackbarConfig | string, duration?: Adaptive<'long' | 'short' | number>) => void

    /**
     * Hides the currently displayed Snackbar.
     */
    hideSnackbar: (onHide?: () => void) => void
}

const InverseButton = (props: ButtonProps) => {
    return <Button c={ThemeTokens.inversePrimary} mode="text" {...props}/>
}

const defaultTransitions = [
    "opacity 200ms var(--znui-emphasized-decelerate-motion)",
    "transform 200ms var(--znui-emphasized-decelerate-motion)",
].join(",")

export const useSnackbar = (): SnackbarHook => {

    const [isHide, setIsHide] = useState<boolean>(true)
    const [isTouched, setIsTouched] = useState<boolean>(false)
    const timeout = useRef<ReturnType<typeof setTimeout>>()
    const [config, setConfig] = useState<SnackbarConfig | undefined>()
    const [duration, setDuration] = useState<Adaptive<'long' | 'short' | number> | undefined>(undefined)

    const durationValue = useAdaptiveValue(duration ?? config?.duration) || 'short'
    const bottomOffset = (useAdaptiveValue(config?.bottom) || 0) + 15
    const hideType = useAdaptiveValue(['y', 'x'])
    const horizontal = config?.horizontal || 'right'

    const onClick = (ev: MouseEvent<HTMLButtonElement>, func?: MouseEventHandler<HTMLButtonElement>, close?: boolean) => {
        func?.(ev)
        if((close ?? true)) hide()
    }

    const hide = (onHide?: () => void) => {
        setIsHide(true)
        timeout.current = setTimeout(() => {
            onHide?.call(undefined)
            setConfig(undefined)
        }, 200)
    }

    useEffect(() => {
        if (isTouched || isHide) return;

        const timeout = setTimeout(hide,
            typeof durationValue === 'string' ? {
                short: 1550,
                long: 2750,
            }[durationValue] : durationValue
        )

        return () => {
            clearTimeout(timeout)
        }
    }, [durationValue, isTouched, isHide])

    const Snackbar = config && (
        <Layout
            shapeScale='esm'
            bg={ThemeTokens.inverseSurface}
            c={ThemeTokens.inverseOnSurface}
            userSelect='none'
            to={{
                oc: isHide ? 0 : 1,
                transform: isHide ? 'scale(0.9)' : 'scale(1)',
                baseDuration: 200,
            }}
            onTouchStart={(e) => {
                e.currentTarget.setAttribute('data-offset-x', e.touches[0].clientX.toString())
                e.currentTarget.setAttribute('data-offset-y', e.touches[0].toString())
                e.currentTarget.style.transition = 'none'

                setIsTouched(true)
            }}
            onTouchMove={(e) => {
                const offsetX = parseInt(e.currentTarget.getAttribute('data-offset-x') || '0')
                const offsetY = parseInt(e.currentTarget.getAttribute('data-offset-y') || '0')

                const clientX = e.touches[0].clientX
                const clientY = e.touches[0].clientY

                if (hideType === 'y') {
                    const y = (clientY - offsetY) > 0 ? clientY - offsetY : 0
                    e.currentTarget.style.bottom = bottomOffset - y + 'px'

                    const percentToHide =
                        1 - (y / e.currentTarget.getBoundingClientRect().height)

                    if (percentToHide < 0.3) {
                        hide()
                        e.currentTarget.setAttribute('data-touch-hidden', 'true')
                    }

                    e.currentTarget.style.opacity = percentToHide.toString()
                } else {
                    const x = clientX - offsetX
                    if (horizontal === 'left') {
                        e.currentTarget.style.left = x + 'px'
                    } else {
                        e.currentTarget.style.right = -x + 'px'
                    }

                    const percentToHide =
                        1 - (Math.abs(x) / e.currentTarget.getBoundingClientRect().width)

                    if (percentToHide <= 0.2) {
                        hide()
                        e.currentTarget.setAttribute('data-touch-hidden', 'true')
                    }

                    e.currentTarget.style.opacity = percentToHide.toString()
                }
            }}
            onPointerUp={(e) => {
                if (e.currentTarget.getAttribute('data-touch-hidden')) {
                    return
                }

                e.currentTarget.style.left = horizontal === 'left' ? '15px' : 'unset'
                e.currentTarget.style.right = horizontal === 'right' ? '15px' : 'unset'
                e.currentTarget.style.bottom = bottomOffset + 'px'
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transition = defaultTransitions + ',' + ([
                    "left 200ms var(--znui-emphasized-decelerate-motion)",
                    "bottom 200ms var(--znui-emphasized-decelerate-motion)",
                    "right 200ms var(--znui-emphasized-decelerate-motion)",
                ].join(','))

                setIsTouched(false)
            }}
            style={{
                touchAction: "none"
            }}
            w="calc(100vw - 30px)"
            maxW={420}
            pos="fixed"
            left={horizontal === 'left' ? 15 : 'unset'}
            right={horizontal === 'right' ? 15 : 'unset'}
            bottom={bottomOffset}
            zIndex={5000}
        >
            <HStack align="center" pl={16} pr={config.action || config.closeButton ? 8 : 16}
                    pv={config.action || config.closeButton ? 4 : 14}>
                <Body size='medium' flex={1}>{config.text}</Body>

                {config.action &&
                    <InverseButton onClick={e => onClick(e, config.action?.onClick, config.action?.close)}>
                        {config.action.title}
                    </InverseButton>
                }

                {config.closeButton &&
                    <IconButton layoutSize={48}
                                c={ThemeTokens.inverseOnSurface}
                                onClick={e => onClick(e, config.closeButton?.onClick, config.closeButton?.close)}>
                        {config.closeButton.icon}
                    </IconButton>
                }
            </HStack>
        </Layout>
    )
    const show = (data: SnackbarConfig | string, duration: Adaptive<'long' | 'short' | number> = undefined) =>
    {
        const config = typeof data === "string" ? {text: data} : data
        setTimeout(() => setIsHide(false), 0)
        setConfig(config)
        setDuration(duration)
        if(timeout.current) clearTimeout(timeout.current)
    }

    return {
        snackbar: config && createPortal(Snackbar, document.getElementById('znui-portal')!),
        showSnackbar: show,
        hideSnackbar: hide,
    }
}
