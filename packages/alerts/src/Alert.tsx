import React, {useCallback, useEffect, useRef, useState} from "react";
import Measure, {BoundingRect} from "react-measure";
import {Layout} from "@znui/layouts";
import {BaseDialog} from "./BaseDialog/BaseDialog";
import {Button} from "@znui/buttons";
import {AlertDialogConfig, ValuesType} from "./useAlerts";

export default function Alert({config, remove}: {config: AlertDialogConfig<ValuesType>, remove: () => void}) {
    const scrimRef = useRef<HTMLDivElement | null>(null)
    const baseDialogWrapperRef = useRef<HTMLDivElement | null>(null)
    const [dialogSizes, setDialogSizes] = useState<Partial<BoundingRect>>({
        width: 0,
        height: 0
    })

    const [stateValues, setStateValues] = useState(config.defaultValues ?? {})

    const setValue = useCallback((key: string, value: any) => {
        setStateValues((oldValues) => {
            const values = {
                ...oldValues,
            }

            values[key] = value
            return values
        })
    }, [setStateValues])

    const xPosition = window.innerWidth / 2
    const yPosition = window.innerHeight / 2
    const xOffset = -dialogSizes.width!! / 2
    const yOffset = -dialogSizes.height!! / 2

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

    const close = useCallback(() => {
        setTimeout(() => {
            const scrim = scrimRef.current
            const baseDialogWrapper = baseDialogWrapperRef.current
            if (scrim == null || baseDialogWrapper == null) return;
            scrim.style.opacity = "0"

            const baseDialog = (baseDialogWrapper.firstElementChild!! as HTMLDivElement);
            baseDialog.style.maxHeight = "0";

            setTimeout(() => {
                remove()
            }, 500)
        })
    }, [remove])

    return <Layout
        pos="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={1500}
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
            onClick={(config.cancelable ?? true) ? close : undefined}
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
                transform={['translate(-50%, -50%)', 'unset']}
                ref={measureRef}
            >

                <BaseDialog
                    maxH={dialogSizes.height !== 0 ? 0 : undefined}
                    icon={config.icon}
                    iconSize={config.iconSize}
                    title={config.title}
                    description={config.description}
                    transition="max-height 300ms var(--znui-emphasized-decelerate-motion)"
                    actions={config.actions?.map((action, index) =>
                        <Button variant="text" key={index} onClick={e => {
                            if (action.close) close()
                            if (action.onClick?.(e, stateValues)) close()
                        }}>{action.title}</Button>
                    )}
                >
                    {
                        config.component && React.createElement(config.component, {...stateValues, setValue, close})
                    }
                </BaseDialog>
            </Layout>
        }</Measure>
    </Layout>
}