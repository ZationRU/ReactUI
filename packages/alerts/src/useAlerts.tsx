import {usePortals, ZnUIPortal} from "@znui/portals";
import React, {
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
    MouseEvent,
    EventHandler, JSXElementConstructor
} from "react";
import Measure, {BoundingRect} from "react-measure";
import {useAdaptiveValue} from "@znui/base";
import {Layout} from "@znui/layouts";
import {BaseDialog} from "./BaseDialog/BaseDialog";
import {Button} from "@znui/buttons";

export type AlertDialogConfig = {
    icon?: ReactNode
    title: ReactNode|string
    description?: ReactNode|string
    actions?: AlertDialogConfigActions[]
    component?: JSXElementConstructor<{
        dialogInterface: AlertDialogInterface
    }>
    cancelable?: boolean,
    defaultValue?: { [key: string]: any }
}

export type AlertDialogConfigActions = {
    title: ReactNode|string,
    cancel?: boolean,
    onClick?: EventHandler<MouseEvent<HTMLButtonElement> & {
        dialogInterface: AlertDialogInterface
    }>
}

export type AlertDialogInterface = {
    cancel: () => void;
    values: { [key: string]: any }
    setValue: (key: string, value: any) => void
}

export const useAlerts = (): (config: AlertDialogConfig, clickEvent?: MouseEvent) => AlertDialogInterface => {
    const { createPortal } = usePortals()

    return (config: AlertDialogConfig, clickEvent?: MouseEvent): AlertDialogInterface => {
        let portal: ZnUIPortal
        const cancelable = config.cancelable === undefined ? true : config.cancelable

        let cancel = () => {
            portal.remove()
        }

        let values = config.defaultValue || {}
        let dialogInterface: AlertDialogInterface = {
            cancel: () => cancel(),
            values,
            setValue: (key: string, value: any) => {
                values[key] = value
            }
        }

        portal = createPortal(() => {
            const scrimRef = useRef<HTMLDivElement | null>(null)
            const baseDialogWrapperRef = useRef<HTMLDivElement | null>(null)
            const [dialogSizes, setDialogSizes] = useState<Partial<BoundingRect>>({
                width: 0,
                height: 0
            })

            const [stateValues, setStateValues] = useState(values)

            dialogInterface.setValue = useCallback((key, value) => {
                setStateValues((oldValues) => {
                    const values = {
                        ...oldValues,
                    }

                    values[key] = value
                    return values
                })
            }, [setStateValues])

            useEffect(() => {
                values = stateValues
                dialogInterface.values = stateValues
            }, [stateValues]);

            const xPosition = useAdaptiveValue({
                esm: window.innerWidth / 2,
                md: clickEvent == null
                    ? window.innerWidth / 2 :
                    clickEvent.clientX < 56 ? 56 :
                        clickEvent.clientX > window.innerWidth - 56 ? window.innerWidth - 56 :
                            clickEvent.clientX
            })

            const yPosition = useAdaptiveValue({
                esm: window.innerHeight / 2,
                md: clickEvent == null
                    ? window.innerHeight / 2 :
                    clickEvent.clientY < 56 ? 56 :
                        clickEvent.clientY > window.innerHeight - 56 ? window.innerHeight - 56 :
                            clickEvent.clientY
            })

            const xOffset = useAdaptiveValue({
                esm: -dialogSizes.width!! / 2,
                md: clickEvent == null
                    ? -dialogSizes.width!! / 2 :
                    clickEvent.clientX - dialogSizes.width!! < 56 ? 0 :
                        clickEvent.clientX + dialogSizes.width!! > window.innerWidth - 56 ? -dialogSizes.width!! :
                            -dialogSizes.width!! / 2
            })

            const yOffset = useAdaptiveValue({
                esm: -dialogSizes.height!! / 2,
                md: clickEvent == null
                    ? -dialogSizes.height!! / 2 :
                    clickEvent.clientY - dialogSizes.height!! < 56 ? 0 :
                        clickEvent.clientY + dialogSizes.height!! > window.innerHeight - 56 ? -dialogSizes.height!! :
                            -dialogSizes.height!! / 2
            })

            useEffect(() => {
                setTimeout(() => {
                    const scrim = scrimRef.current
                    const baseDialogWrapper = baseDialogWrapperRef.current
                    if (scrim == null || baseDialogWrapper == null) return;
                    scrim.style.opacity = "0.4";
                    scrim.style.transitionTimingFunction = "var(--znui-emphasized-motion)";

                    const baseDialog = (baseDialogWrapper.firstElementChild!! as HTMLDivElement);
                    baseDialog.style.maxHeight = "100em";
                    baseDialog.style.transitionTimingFunction = "var(--znui-emphasized-motion)";
                }, 10)
            }, [scrimRef])

            cancel = useCallback(() => {
                setTimeout(() => {
                    const scrim = scrimRef.current
                    const baseDialogWrapper = baseDialogWrapperRef.current
                    if (scrim == null || baseDialogWrapper == null) return;
                    scrim.style.opacity = "0"

                    const baseDialog = (baseDialogWrapper.firstElementChild!! as HTMLDivElement);
                    baseDialog.style.maxHeight = "0";

                    setTimeout(() => {
                        portal.remove()
                    }, 500)
                })
            }, [])

            return <Layout
                pos="fixed"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={portal.uniqueId + 1000}
                overflow="visible"
            >
                <Layout
                    bg="black"
                    pos="fixed"
                    opacity={0}
                    ref={scrimRef}
                    transition="opacity 300ms var(--znui-emphasized-decelerate-motion)"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    overflow="visible"
                    onClick={cancelable ? cancel : undefined}
                />

                <Measure
                    bounds={true}
                    innerRef={baseDialogWrapperRef}
                    onResize={contentRect => {
                        if (dialogSizes.height === 0) {
                            setDialogSizes(contentRect.bounds!!)
                        }
                    }}
                >{
                    ({measureRef}) => <Layout
                        pos="absolute"
                        top={['50%', yPosition + yOffset]}
                        left={['50%', xPosition + xOffset]}
                        transform={['translate(-50%, -50%)', '']}
                        ref={measureRef}
                    >

                        <BaseDialog
                            maxH={dialogSizes.height !== 0 ? 0 : undefined}
                            icon={config.icon}
                            title={config.title}
                            description={config.description}
                            transition="max-height 300ms var(--znui-emphasized-decelerate-motion)"
                            actions={config.actions && config.actions.map((action, index) =>
                                <Button mode="text" key={index} onClick={e => {
                                    if (action.cancel) {
                                        cancel()
                                    }

                                    action.onClick && action.onClick({
                                        ...e,
                                        dialogInterface
                                    })
                                }}>{action.title}</Button>
                            )}
                        >
                            {
                                config.component&&React.createElement(config.component, {
                                    dialogInterface: {
                                        ...dialogInterface,
                                        values: stateValues,
                                    }
                                })
                            }
                        </BaseDialog>
                    </Layout>
                }</Measure>
            </Layout>
        })

        return dialogInterface
    }
}