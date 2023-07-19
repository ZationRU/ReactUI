import React, {MouseEventHandler, useCallback, useEffect, useRef, useState} from "react";
import {ReactNode, useMemo} from "react";
import {BaseDialog} from "../components/Layouts/BaseDialog/BaseDialog";
import {Layout} from "../components/Basic/Layout/Layout";
import {portals} from "../components/Providers/portals";
import {Button} from "../components/Widgets/Button/Button";

export type AlertDialogConfig = {
    icon?: ReactNode,
    title: ReactNode|string,
    description?: ReactNode|string,
    actions?: AlertDialogConfigActions[]
    cancelable?: boolean
}

export type AlertDialogConfigActions = {
    title: ReactNode|string,
    cancel?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export type AlertDialogInterface = {
    cancel: () => void;
}

export type DialogInterface = {
    showAlert: (config: AlertDialogConfig, clickEvent?: MouseEvent) => AlertDialogInterface
}

export const useDialogs = (): DialogInterface => {
    const portalRegister = portals()

    return useMemo(() => ({
        showAlert: (config, clickEvent) => {
            const portal = portalRegister()
            const cancelable = config.cancelable === undefined ? true : config.cancelable

            let cancel = () => {
                portal.remove()
            }

            const AlertDialog = () => {
                const scrimRef = useRef<HTMLDivElement|null>(null)
                const baseDialogWrapperRef = useRef<HTMLDivElement|null>(null)

                useEffect(() => {
                    setTimeout(() => {
                        const scrim = scrimRef.current
                        const baseDialogWrapper = baseDialogWrapperRef.current
                        if(scrim==null||baseDialogWrapper==null) return;
                        scrim.style.opacity = "0.4";

                        const baseDialog = (baseDialogWrapper.firstElementChild!! as HTMLDivElement);
                        baseDialog.style.maxHeight = "100vh";
                    }, 10)
                }, [scrimRef])

                cancel = useCallback(() => {
                    setTimeout(() => {
                        const scrim = scrimRef.current
                        const baseDialogWrapper = baseDialogWrapperRef.current
                        if(scrim==null||baseDialogWrapper==null) return;
                        scrim.style.opacity = "0"

                        const baseDialog = (baseDialogWrapper.firstElementChild!! as HTMLDivElement);
                        baseDialog.style.maxHeight = "0";

                        setTimeout(() => {
                            portal.remove()
                        }, 300)
                    })
                }, [])

                return <Layout
                    pos="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={portal.id+1000}
                >
                    <Layout
                        bg="black"
                        pos="absolute"
                        opacity={0}
                        ref={scrimRef}
                        transition="opacity 300ms var(--emphasized-motion)"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        onClick={cancelable?cancel:undefined}
                    />

                    <Layout
                        pos="absolute"
                        top={"50%"}
                        left={clickEvent?.clientX || "50%"}
                        transform="translate(-50%, -50%)"
                        ref={baseDialogWrapperRef}
                    >
                        <BaseDialog
                            maxH={0}
                            icon={config.icon}
                            title={config.title}
                            description={config.description}
                            transition="max-height 200ms var(--emphasized-motion)"
                            actions={config.actions&&config.actions.map((action, index) =>
                                <Button mode="text" key={index} onClick={e => {
                                    if(action.cancel) {
                                        cancel()
                                    }

                                    action.onClick&&action.onClick(e)
                                }}>{action.title}</Button>
                            )}
                        />
                    </Layout>
                </Layout>
            }

            portal.show(<AlertDialog/>)

            return {
                cancel: () => cancel()
            }
        }
    }), [portalRegister])
}