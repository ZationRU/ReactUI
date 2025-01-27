import React, {JSXElementConstructor, MouseEvent, ReactNode, ReactPortal, useState} from "react";
import {createPortal} from "react-dom";
import Alert from "./Alert";

export type AlertDialogConfig = {
    /**
     * An optional icon to display in the alert.
     */
    icon?: ReactNode

    /**
     * The title of the alert.
     */
    title: ReactNode | string

    /**
     * An optional description to display in the alert.
     */
    description?: ReactNode | string

    /**
     * An array of actions to display in the alert.
     */
    actions?: AlertDialogConfigActions[]

    /**
     * An optional component to render in the dialog body.
     */
    component?: JSXElementConstructor<object & {setValue: (key: string, value: any) => void}>

    /**
     * Default values for the alert's internal state.
     * Used by the `component` prop if provided.
     */
    defaultValues?: { [key: string]: any }

    /**
     * Whether the dialog can be closed by clicking outside of it.
     * @default true
     */
    cancelable?: boolean,
}

export type AlertDialogConfigActions = {
    /**
     * The title of the action button.
     */
    title: ReactNode | string,

    /**
     * If true, this action will close the alert.
     */
    close?: boolean,

    /**
     * An optional click handler for the action button.
     * Receives the event object and the current values.
     *
     * Returning `true` closes alert.
     */
    onClick?: (e: MouseEvent<HTMLButtonElement>, values: NonNullable<AlertDialogConfig['defaultValues']>) => boolean | undefined
}

/**
 * ZnUI useAlerts hook
 * @example const { openAlert, alerts } = useAlerts()
 */
export const useAlerts = (): {openAlert: (config: AlertDialogConfig) => void, alerts: ReactPortal[]} => {
    const [alerts, setAlerts] = useState<Record<string, ReactPortal>>({})

    function open(config: AlertDialogConfig) {
        const id = Date.now().toString()
        const remove = () => {
            setAlerts(prev => {
                delete prev[id]
                return {...prev}
            })
        }

        const portal = createPortal(<Alert remove={remove} config={config} />, document.getElementById('znui-portal')!)
        setAlerts(prev => {
            return {...prev, [id]: portal}
        })
    }

    return {
        openAlert: open,
        alerts: Object.values(alerts)
    }
}