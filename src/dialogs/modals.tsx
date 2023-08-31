import {ZnUIPortalRegistrar} from "../components/Providers/portals";
import React, {JSXElementConstructor, useCallback, useEffect, useRef, useState, UIEvent} from "react";
import {Layout} from "../components";
import {useAdaptiveValue} from "../adaptive";
import {ThemeTokens} from "../theme";

export type ModalDialogInterface = {
    close: () => void
}

export type ModalProps = {
    dialogInterface: ModalDialogInterface,
}

export type ModalContextData = {
    dialogInterface: ModalDialogInterface
    isFullscreen: boolean
}

export type ModalOptions = {
    fullscreen?: boolean|'auto'
    cancelable?: boolean
}

export const ModalContext
    = React.createContext<ModalContextData|null>(null)

export const showModal = (portalRegister: ZnUIPortalRegistrar) => {
    return (
        Component: JSXElementConstructor<ModalProps>,
        clickEvent?: UIEvent,
        options?: ModalOptions
    ): ModalDialogInterface => {
        const {
            fullscreen = 'auto',
            cancelable = true
        } = options || {}

        const portal = portalRegister();

        const target = clickEvent?.currentTarget
        const targetStyles = target ? window.getComputedStyle(target) : null;

        let targetRect = target ? target.getBoundingClientRect() : null;

        let close = () => {
            portal.remove()
        }

        const modalDialogInterface: ModalDialogInterface = {
            close: () => close(),
        }

        const ModalPortal = () => {
            const scrimRef = useRef<HTMLDivElement | null>(null)
            const modalContainerRef = useRef<HTMLDivElement | null>(null)
            const [isExpanded, setIsExpanded] = useState<boolean>(false)

            useEffect(() => {
                setTimeout(() => {
                    const scrim = scrimRef.current
                    const modalContainer = modalContainerRef.current
                    if (scrim == null||modalContainer==null) return;
                    scrim.style.opacity = "0.4";
                    scrim.style.transitionTimingFunction = "var(--emphasized-motion)";

                    setIsExpanded(true)
                }, 10)
            }, [scrimRef])

            close = useCallback(() => {
                setTimeout(() => {
                    const scrim = scrimRef.current
                    const modalContainer = modalContainerRef.current
                    if (scrim == null||modalContainer==null) return;
                    scrim.style.opacity = "0"

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

            console.log(targetStyles?.background)
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
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={portal.id + 1000}
                overflow="visible"
            >
                <Layout
                    bg="black"
                    pos="fixed"
                    opacity={0}
                    ref={scrimRef}
                    transition="opacity 300ms var(--emphasized-decelerate-motion)"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    overflow="visible"
                    onClick={cancelable ? close: undefined}
                />

                <Layout
                    ref={modalContainerRef}
                    position="fixed"
                    clip
                    c={ThemeTokens.onSurface}
                    borderRadius={isExpanded? isFullscreen ? 0 : 28 : targetStyles?.borderRadius || 0}
                    borderColor={!isExpanded&&targetStyles? targetStyles.borderColor : 'none'}
                    maxH={isExpanded? '100%': targetRect?.height||0}
                    h={isExpanded&&isFullscreen ? '100%': undefined}
                    w={isExpanded? isFullscreen ? '100%': 800: targetRect?.width||0}
                    maxW={isExpanded&&!isFullscreen ? "calc(100% - 50px)": '100%'}
                    left={x}
                    top={y}
                    bg={isExpanded||!hasBackground ? (isFullscreen ? ThemeTokens.surface : ThemeTokens.surfaceContainerHigh): targetStyles?.background}
                    transform={"translate(-50%, -50%)"}
                    transition={[
                        ...(targetRect?[
                            "left 300ms var(--emphasized-motion)",
                            "top 300ms var(--emphasized-motion)",
                            "width 300ms var(--emphasized-motion)",
                            "max-height 300ms var(--emphasized-motion)",
                            "border-radius 300ms var(--emphasized-motion)",
                            "border-color 300ms var(--emphasized-motion)",
                            isExpanded ? "background-color 100ms var(--emphasized-motion)":
                                "background-color 300ms var(--emphasized-motion)",
                        ]:[]),
                    ].join(",")}
                >
                    {/*{target&&<Layout*/}
                    {/*    oc={isExpanded? 0: 1}*/}
                    {/*    pos='absolute'*/}
                    {/*    transition={*/}
                    {/*        "opacity " + (isExpanded? '200ms': '500ms') + " var(--emphasized-decelerate-motion)"*/}
                    {/*    }*/}
                    {/*>*/}
                    {/*    {*/}
                    {/*        React.createElement(target.tagName, {*/}
                    {/*            ...target.attributes,*/}
                    {/*            dangerouslySetInnerHTML: {*/}
                    {/*                __html:target.innerHTML*/}
                    {/*            }*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</Layout>}*/}

                    <Layout h='100%' w='100%' oc={isExpanded? 1: 0} transition={targetRect? [
                        "opacity " + (isExpanded? '300ms': '200ms') + " var(--emphasized-decelerate-motion)",
                    ].join(","): undefined}>
                        <ModalContext.Provider value={{
                            dialogInterface: modalDialogInterface,
                            isFullscreen
                        }}>
                            <Component dialogInterface={modalDialogInterface}/>
                        </ModalContext.Provider>
                    </Layout>
                </Layout>
            </Layout>
        }

        portal.show(<ModalPortal/>)

        return modalDialogInterface
    }
}