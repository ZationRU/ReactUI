import React, {JSXElementConstructor, useCallback, useEffect, useRef, useState, UIEvent} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {usePortals, ZnUIPortal} from "@znui/portals";
import {useAdaptiveValue} from "@znui/base";
import {Layout} from "@znui/layouts";


export type ModalDialogInterface = {
    close: () => void
}

export type ModalProps = {
    dialogInterface: ModalDialogInterface,
}

export type ModalContextData = {
    dialogInterface: ModalDialogInterface
    isFullscreen: boolean
    isExpanded: boolean
}

export type ModalOptions<Props = {}> = {
    fullscreen?: boolean | 'auto'
    cancelable?: boolean
    props?: Props
}

export const ModalContext
    = React.createContext<ModalContextData|null>(null)

export const useModals = <Props = {}> (defaultOptions: ModalOptions<Props> = {}): (
    component: JSXElementConstructor<ModalProps & Props>,
    clickEvent?: UIEvent,
    options?: ModalOptions<Props>
) => ModalDialogInterface => {
    const {createPortal} = usePortals()

    return (
        Component,
        clickEvent,
        options
    ) => {
        const {
            fullscreen = 'auto',
            cancelable = true,
            props = {}
        } = Object.assign(defaultOptions, options || {})

        let portal: ZnUIPortal;

        const target = clickEvent?.currentTarget
        const targetStyles = target ? window.getComputedStyle(target) : null;

        let targetRect = target ? target.getBoundingClientRect() : null;

        const modalDialogInterface: ModalDialogInterface = {
            close: () => {
                portal.remove()
            },
        }

        portal = createPortal(() => {
            const scrimRef = useRef<HTMLDivElement | null>(null)
            const modalContainerRef = useRef<HTMLDivElement | null>(null)
            const [isExpanded, setIsExpanded] = useState<boolean>(false)

            useEffect(() => {
                setTimeout(() => {
                    const scrim = scrimRef.current
                    const modalContainer = modalContainerRef.current
                    if (scrim == null||modalContainer==null) return;

                    setIsExpanded(true)
                }, 10)
            }, [scrimRef])

            modalDialogInterface.close = useCallback(() => {
                setTimeout(() => {
                    const scrim = scrimRef.current
                    const modalContainer = modalContainerRef.current
                    if (scrim == null||modalContainer==null) return;
                    if(target!=null) {
                        targetRect = target.getBoundingClientRect()
                    }

                    setIsExpanded(false)
                    setTimeout(() => {
                        portal.remove()
                    }, 500)
                })
            }, [])

            const autoFullscreen = useAdaptiveValue({
                esm: true,
                emd: false
            })

            const hasBackground = !targetStyles?.background?.split(' ')?.find(it =>
                [
                    'rgb(0, 0, 0)'
                ].includes(it)
            )

            const isFullscreen = fullscreen==='auto'||fullscreen===undefined ? autoFullscreen: fullscreen

            const targetHeightHalf = targetRect ? targetRect.height / 2: 0
            const targetWidthHalf = targetRect ? targetRect.width / 2: 0
            const x = isExpanded?
                isFullscreen ? '50%' : '50%'
            : (targetRect?.left||0) + targetWidthHalf
            const y = isExpanded?
                isFullscreen ? '50%' : '50%'
            : (targetRect?.top||0) + targetHeightHalf

            return <Layout
                pos="fixed"
                posA={0}
                zIndex={portal.uniqueId + 1000}
                overflow="visible"
            >
                <Layout
                    bg="black"
                    pos="fixed"
                    to={{
                        baseDuration: 300,
                        baseTransition: isExpanded? ThemeTokens.motion.emphasized:
                            ThemeTokens.motion.emphasizedDecelerate,
                        oc: isExpanded? 0.4: 0
                    }}
                    ref={scrimRef}
                    posA={0}
                    overflow="visible"
                    onClick={cancelable ? close: undefined}
                />

                <Layout
                    ref={modalContainerRef}
                    position="fixed"
                    clip={true}
                    transform={"translate(-50%, -50%)"}
                    to={{
                        baseDuration: targetRect? isExpanded? 200: 300: 0,
                        left: x,
                        top: y,
                        borderRadius: isExpanded? isFullscreen ? 0 : 28 : targetStyles?.borderRadius || 0,
                        borderColor: !isExpanded&&targetStyles? targetStyles.borderColor : 'none',
                        maxH: isExpanded? '100%': targetRect?.height||0,
                        maxW: isExpanded&&!isFullscreen ? "calc(100% - 50px)": '100%',
                        h: isExpanded&&isFullscreen ? '100%': undefined,
                        w: isExpanded? isFullscreen ? '100%': ['100vw', null, 800]: targetRect?.width||0,
                        bg: {
                            duration: isExpanded ? 100: 50,
                            value: isExpanded||!hasBackground ?
                                (isFullscreen ? ThemeTokens.surface : ThemeTokens.surfaceContainerHigh):
                                targetStyles?.background
                        }
                    }}
                >
                    {target&&<Layout
                        to={{
                            baseDuration: isExpanded? 200: 300,
                            baseTransition: ThemeTokens.motion.emphasizedDecelerate,
                            oc: isExpanded? 0: 1
                        }}
                        pos='absolute'
                        posA={0}
                        pointerEvents='none'
                    >
                        {
                            React.createElement(target.tagName.toLowerCase(), {
                                className: target.className,
                                style: {
                                    ...target['style'],
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    top: 0,
                                    borderRadius: isExpanded? isFullscreen ? 0 : 28 : targetStyles?.borderRadius || 0,
                                },
                                ...target.attributes,
                                dangerouslySetInnerHTML: {
                                    __html:target.innerHTML
                                }
                            })
                        }
                    </Layout>}

                    <Layout
                        to={{
                            baseDuration: targetRect? isExpanded? 200: 300: 0,
                            oc: {
                                value: !isExpanded? 0: 1,
                                duration: isExpanded? 200: 300,
                                transition: ThemeTokens.motion.emphasizedDecelerate
                            },
                            h: isExpanded&&isFullscreen ? '100%': undefined,
                            w: isExpanded? isFullscreen ? '100%': [undefined, null, 800]: targetRect?.width||0,
                        }}
                        clip={true}
                        display='flex'
                        c={ThemeTokens.onSurface}
                    >
                        <ModalContext.Provider value={{
                            dialogInterface: modalDialogInterface,
                            isFullscreen,
                            isExpanded
                        }}>
                            {
                                React.createElement(
                                    Component,
                                    {
                                        dialogInterface: modalDialogInterface,
                                        ...props
                                    } as ModalProps & Props
                                )
                            }
                        </ModalContext.Provider>
                    </Layout>
                </Layout>
            </Layout>
        })

        return modalDialogInterface
    }
}