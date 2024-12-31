import React, {MouseEventHandler, ReactNode, useEffect, useState} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {keyframes} from "@emotion/react";
import {usePortals, ZnUIPortal} from "@znui/portals";
import {Adaptive, useAdaptiveValue} from "@znui/base";
import {Button, ButtonProps, IconButton} from "@znui/buttons";
import {HStack, Layout} from "@znui/layouts";
import {Body} from "@znui/typography";

export type SnackbarConfig = {
    closeButton?: SnackbarCloseButton
    text: ReactNode | string
    action?: SnackbarAction
    horizontal?: 'left' | 'right'
    bottom?: Adaptive<number>
    duration?: Adaptive<'long' | 'short' | number>
}

export type SnackbarAction = {
    title: ReactNode | string,
    cancel?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export type SnackbarCloseButton = {
    icon: ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export type SnackbarInterface = {
    hide: () => void;
}

export type SnackbarHook = (
    (config: SnackbarConfig) => SnackbarInterface
) & (
    (text: string) => SnackbarInterface
)

const InverseButton = (props: ButtonProps) => {
    return <Button c={ThemeTokens.inversePrimary} mode="text" {...props}/>
}

let hide: (onHide?: () => void) => void = (onHide) => {
    onHide?.call(undefined)
}

const showAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const useSnackbar = (): SnackbarHook => {
    const { createPortal } = usePortals()

    return (data: SnackbarConfig | string, duration: Adaptive<'long' | 'short' | number> = undefined) => {
        const config = typeof data === "string" ? { text: data }: data
        const horizontal = config.horizontal || 'right'
        let portal: ZnUIPortal

        hide(() => {
            portal = createPortal(() => {
                const [isHide, setIsHide]
                    = useState<|boolean>(false)
                const [isTouched, setIsTouched]
                    = useState<|boolean>(false)

                const durationValue = useAdaptiveValue(duration ?? config.duration) || 'short'
                const bottomOffset = (useAdaptiveValue(config.bottom) || 0) + 15
                const hideType = useAdaptiveValue(['y', 'x'])

                hide = (onHide?: () => void) => {
                    setIsHide(true)
                    setTimeout(() => {
                        portal.remove()
                        onHide?.call(undefined)
                    }, 200)
                }

                useEffect(() => {
                    if(isTouched) return;

                    const timeout = setTimeout(hide,
                        typeof durationValue === 'string' ? {
                            short: 1550,
                            long: 2750,
                        }[durationValue] : durationValue
                    )

                    return () => {
                        clearTimeout(timeout)
                    }
                }, [durationValue, isTouched]);

                const defaultTransitions = [
                    "opacity 200ms var(--znui-emphasized-decelerate-motion)",
                    "transform 200ms var(--znui-emphasized-decelerate-motion)",
                ].join(",")


                return <Layout
                    shapeScale='esm'
                    className="elevation-3"
                    animation={showAnimation + " 300ms var(--znui-emphasized-motion)"}
                    bg={ThemeTokens.inverseSurface}
                    c={ThemeTokens.inverseOnSurface}
                    userSelect='none'
                    oc={isHide ? 0: 1}
                    onTouchStart={(e) => {
                        e.currentTarget.setAttribute('data-offset-x', e.touches[0].clientX.toString())
                        e.currentTarget.setAttribute('data-offset-y', e.touches[0].toString())
                        e.currentTarget.style.transition = 'none'

                        setIsTouched(true)
                    }}
                    onTouchMove={(e) => {
                        const offsetX = parseInt(e.currentTarget.getAttribute('data-offset-x')||'0')
                        const offsetY = parseInt(e.currentTarget.getAttribute('data-offset-y')||'0')

                        const clientX = e.touches[0].clientX
                        const clientY = e.touches[0].clientY

                        if(hideType==='y') {
                            const y = (clientY - offsetY) > 0 ? clientY - offsetY: 0
                            e.currentTarget.style.bottom = bottomOffset - y + 'px'

                            const percentToHide =
                                1 - (y / e.currentTarget.getBoundingClientRect().height)

                            if(percentToHide<0.3) {
                                hide()
                                e.currentTarget.setAttribute('data-touch-hidden', 'true')
                            }

                            e.currentTarget.style.opacity = percentToHide.toString()
                        }else{
                            const x = clientX - offsetX
                            if(horizontal==='left') {
                                e.currentTarget.style.left = x + 'px'
                            }else {
                                e.currentTarget.style.right = -x + 'px'
                            }

                            const percentToHide =
                                1 - (Math.abs(x) / e.currentTarget.getBoundingClientRect().width)

                            if(percentToHide<=0.2) {
                                hide()
                                e.currentTarget.setAttribute('data-touch-hidden', 'true')
                            }

                            e.currentTarget.style.opacity = percentToHide.toString()
                        }
                    }}
                    onPointerUp={(e) => {
                        if(e.currentTarget.getAttribute('data-touch-hidden')) {
                            return
                        }

                        e.currentTarget.style.left = horizontal === 'left' ? '15px' : 'unset'
                        e.currentTarget.style.right = horizontal === 'right' ? '15px' : 'unset'
                        e.currentTarget.style.bottom = bottomOffset + 'px'
                        e.currentTarget.style.opacity = '1'
                        e.currentTarget.style.transition = defaultTransitions+','+([
                            "left 200ms var(--znui-emphasized-decelerate-motion)",
                            "bottom 200ms var(--znui-emphasized-decelerate-motion)",
                            "right 200ms var(--znui-emphasized-decelerate-motion)",
                        ].join(','))

                        setIsTouched(false)
                    }}
                    style={{
                        touchAction: "none"
                    }}
                    transform={isHide ? 'scale(0.9)': 'scale(1)'}
                    transition={defaultTransitions}
                    w="calc(100vw - 30px)"
                    maxW={420}
                    pos="fixed"
                    left={horizontal === 'left' ? 15 : 'unset'}
                    right={horizontal === 'right' ? 15 : 'unset'}
                    bottom={bottomOffset}
                    zIndex={5000}
                >
                    <HStack align="center" pl={16} pr={config.action || config.closeButton ? 8 : 16} pv={config.action || config.closeButton ? 4 : 14}>
                        <Body size='medium' flex={1}>{config.text}</Body>
                        {config.action && <InverseButton onClick={config.action.onClick}>{config.action.title}</InverseButton>}
                        {config.closeButton && <IconButton layoutSize={48} c={ThemeTokens.inverseOnSurface} onClick={config.closeButton.onClick}>{config.closeButton.icon}</IconButton>}
                    </HStack>
                </Layout>
            })
        })

        return {
            hide: () => hide()
        }
    }
}
