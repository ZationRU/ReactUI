import {ZnUIPortalRegistrar} from "../components/Providers/portals";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {Layout} from "../components/Basic/Layout/Layout";
import {useAdaptiveValue} from "../adaptive/useAdaptive";
import {SurfaceLayout} from "../components/Layouts/SurfaceLayout/SurfaceLayout";

export type ModalDialogInterface = {
    close: () => void
}

export type ModalProps = {
    dialogInterface: ModalDialogInterface,
}

export const showModal = (portalRegister: ZnUIPortalRegistrar) => {
    return (Component: React.ComponentClass<ModalProps>, clickEvent?: MouseEvent): ModalDialogInterface => {
        const portal = portalRegister();

        let close = () => {
            portal.remove()
        }

        const modalDialogInterface: ModalDialogInterface = {
            close: () => close(),
        }

        const target = clickEvent?.currentTarget ? clickEvent.currentTarget as Element : null
        const targetStyles = target ? window.getComputedStyle(target) : null;
        const targetRect = target ? target.getBoundingClientRect() : null;

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
                    setIsExpanded(false)

                    setTimeout(() => {
                        portal.remove()
                    }, 500)
                })
            }, [])

            const isFullscreen = useAdaptiveValue({
                esm: true,
                md: false
            })

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

                <SurfaceLayout
                    innerRef={modalContainerRef}
                    position="fixed"
                    oc={isExpanded? 1: 0.8}
                    s={isExpanded&&!isFullscreen ? 3: 0}
                    borderRadius={isExpanded? isFullscreen ? 0 : 28 : targetStyles?.borderRadius || 0}
                    h={isExpanded? isFullscreen ? '100vh': 'inherit': targetRect?.height||0}
                    w={isExpanded? isFullscreen ? '100vw': 800: targetRect?.width||0}
                    left={isExpanded? isFullscreen ? 0 : '50%' : targetRect?.left}
                    top={isExpanded? isFullscreen ? 0 : '50%' : targetRect?.top}
                    bg={isExpanded&&isFullscreen ? 'var(--znui-background)' : undefined}
                    transform={isExpanded? !isFullscreen ? "translate(-50%, -50%)": undefined: "translate(0, 0)"}
                    transition={[
                        "left 300ms var(--emphasized-decelerate-motion)",
                        "top 300ms var(--emphasized-decelerate-motion)",
                        "width 300ms var(--emphasized-decelerate-motion)",
                        "height 300ms var(--emphasized-decelerate-motion)",
                        "border-radius 300ms var(--emphasized-decelerate-motion)",
                        "background-color 300ms var(--emphasized-decelerate-motion)",
                        "opacity 300ms var(--emphasized-decelerate-motion)",
                        "transform 300ms var(--emphasized-decelerate-motion)",
                    ].join(",")}
                >
                    <Layout oc={isExpanded? 1: 0} transition={[
                        "opacity 300ms var(--emphasized-decelerate-motion)",
                    ].join(",")}>
                        {isExpanded && <Component dialogInterface={modalDialogInterface}/>}
                    </Layout>
                </SurfaceLayout>
            </Layout>
        }

        portal.show(<ModalPortal/>)

        return modalDialogInterface
    }
}