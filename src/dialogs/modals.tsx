import {ZnUIPortalRegistrar} from "../components/Providers/portals";
import React, {JSXElementConstructor, useCallback, useEffect, useRef, useState} from "react";
import {Layout} from "../components/Basic/Layout/Layout";
import {useAdaptiveValue} from "../adaptive/useAdaptive";
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
export const ModalContext
    = React.createContext<ModalContextData|null>(null)

export const showModal = (portalRegister: ZnUIPortalRegistrar) => {
    return (
        Component: JSXElementConstructor<ModalProps>,
        clickEvent?: MouseEvent,
        fullscreen?: boolean|'auto'
    ): ModalDialogInterface => {
        const portal = portalRegister();

        const target = clickEvent?.currentTarget ? clickEvent.currentTarget as Element : null
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
                console.log('close')
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

            const isFullscreen = fullscreen==='auto'||fullscreen===undefined ? autoFullscreen: fullscreen

            const targetHeightHalf = targetRect ? targetRect.height / 2: 0
            const targetWidthHalf = targetRect ? targetRect.width / 2: 0
            const x = isExpanded?
                isFullscreen ? '50vw' : '50%'
            : (targetRect?.left||0) + targetWidthHalf
            const y = isExpanded?
                isFullscreen ? '50vh' : '50%'
            : (targetRect?.top||0) + targetHeightHalf

            console.log(targetRect)

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
                    onClick={close}
                />

                <Layout
                    ref={modalContainerRef}
                    position="fixed"
                    c={ThemeTokens.onSurface}
                    borderRadius={isExpanded? isFullscreen ? 0 : 28 : targetStyles?.borderRadius || 0}
                    maxH={isExpanded? '100vh': targetRect?.height||0}
                    w={isExpanded? isFullscreen ? '100vw': 800: targetRect?.width||0}
                    maxW={isExpanded&&!isFullscreen ? "calc(100vw - 50px)": '100vw'}
                    left={x}
                    top={y}
                    bg={isExpanded&&isFullscreen ? ThemeTokens.surface : ThemeTokens.surfaceContainerHigh}
                    transform={"translate(-50%, -50%)"}
                    transition={[
                        ...(targetRect?[
                            "left 300ms var(--emphasized-motion)",
                            "top 300ms var(--emphasized-motion)",
                            "width 300ms var(--emphasized-motion)",
                            "max-height 300ms var(--emphasized-motion)",
                            "border-radius 300ms var(--emphasized-motion)",
                            "background-color 300ms var(--emphasized-motion)",
                        ]:[]),
                    ].join(",")}
                >
                    <Layout oc={isExpanded? 1: 0} transition={targetRect? [
                        "opacity " + (isExpanded? '500ms': '200ms') + "var(--emphasized-decelerate-motion)",
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